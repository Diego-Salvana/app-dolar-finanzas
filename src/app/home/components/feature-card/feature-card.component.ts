import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, input, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-feature-card',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './feature-card.component.html',
   styleUrl: './feature-card.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCardComponent implements AfterViewInit {
   private iconContainer = viewChild<ElementRef<HTMLElement>>('iconContainer');
   icon = input.required<string>();
   iconColor = input<string>();
   title = input.required<string>();
   description = input.required<string>();

   ngAfterViewInit () {
      const element = this.iconContainer();
      
      if (element) {
         element.nativeElement.innerHTML = this.icon();
      }
   }
}
