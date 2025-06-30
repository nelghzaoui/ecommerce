import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export function useFormField<T>(
  parentGroup: FormGroup,
  key: string,
  options: {
    validators?: ValidatorFn[];
    prefill?: T;
    updateOn?: 'change' | 'blur' | 'submit';
    replaceIfExists?: boolean;
  } = {}
): FormControl<T | null> {
  const {
    validators = [],
    prefill = null,
    updateOn,
    replaceIfExists = false
  } = options;

  const control = new FormControl<T | null>(prefill, {
    validators,
    updateOn,
    nonNullable: false
  });

  if (parentGroup.contains(key)) {
    if (replaceIfExists) {
      parentGroup.removeControl(key);
    } else {
      throw new Error(
        `FormControl with key "${key}" already exists in FormGroup.`
      );
    }
  }

  parentGroup.addControl(key, control);
  return control;
}
