import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input
} from '@angular/core';

@Component({
  selector: 'tx-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [attr.class]="classes()">
      <ng-content />
    </div>
  `
})
export class CardComponent {
  isFullHeight = input(false);
  hasGap = input(false);
  hoverable = input(false);
  bordered = input(false);

  readonly classes = computed(() => {
    return [
      'bg-white rounded-xl p-6 sm:p-4',
      'transition-shadow duration-200 ease-in-out',
      this.hoverable() && 'hover:shadow-md',
      this.bordered() ? 'border border-gray-200' : 'shadow-sm',
      this.hasGap() && 'flex gap-5 items-start',
      this.isFullHeight() && 'h-full'
    ]
      .filter(Boolean)
      .join(' ');
  });
}
