import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output
} from '@angular/core';

@Component({
  selector: 'tx-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="type()"
      [attr.aria-label]="alt() || null"
      [disabled]="isDisabled()"
      [attr.class]="classes()"
      (click)="clicked.emit()"
    >
      <div class="flex items-center gap-2 justify-center">
        {{ label() }}
      </div>
    </button>
  `
})
export class ButtonComponent {
  label = input.required<string>();
  alt = input<string>();
  color = input<ButtonColor>('primary');
  type = input<ButtonType>('button');
  isDisabled = input<boolean>(false);
  isFull = input<boolean>(false);
  clicked = output<void>();

  readonly classes = computed(() => {
    const base = 'font-semibold px-4 py-2 rounded transition duration-200';
    const colorClass =
      {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-secondary text-white hover:bg-secondary/80',
        tertiary: 'bg-transparent text-primary hover:underline'
      }[this.color()] ?? '';

    const fullWidth = this.isFull() ? 'w-full' : '';
    const disabled = this.isDisabled() ? 'opacity-50 cursor-not-allowed' : '';

    return `${base} ${colorClass} ${fullWidth} ${disabled}`.trim();
  });
}

export type ButtonColor = 'primary' | 'secondary' | 'tertiary';
export type ButtonType = 'button' | 'submit' | 'reset';
