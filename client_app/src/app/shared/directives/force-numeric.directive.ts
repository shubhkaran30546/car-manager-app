import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appForceNumeric]',
  standalone: true,
})
export class ForceNumericDirective {
  @Input('appForceNumeric') isEnabled: boolean = false;

  private decimalPattern = /[^0-9.]/g;
  private integerPattern = /[^0-9]/g;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInputChange(): void {
    if (!this.isEnabled) {
      return;
    }

    const input = this.el.nativeElement;
    const step = this.el.nativeElement.getAttribute('step');

    const pattern =
      step && step.includes('.') ? this.decimalPattern : this.integerPattern;

    input.value = input.value.replace(pattern, '');
  }
}
