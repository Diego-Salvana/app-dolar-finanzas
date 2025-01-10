import { ChangeDetectionStrategy, Component, computed, ElementRef, HostListener, inject, Renderer2, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActiveSectionService } from '../../../dashboard/services';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';
import { DOCUMENT } from '@angular/common';

@Component({
   selector: 'app-nav-bar',
   standalone: true,
   imports: [RouterModule, SwitchThemeComponent],
   templateUrl: './nav-bar.component.html',
   styleUrl: './nav-bar.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
   private document = inject(DOCUMENT);
   private documentElement = this.document.documentElement;
   private renderer = inject(Renderer2);
   private navBar = viewChild.required<ElementRef<HTMLElement>>('navBar');
   private barsIcon = viewChild.required<ElementRef<HTMLElement>>('barsIcon');
   private navMenu = viewChild.required<ElementRef<HTMLElement>>('navMenu');
   private crossIcon = viewChild.required<ElementRef<HTMLElement>>('crossIcon');
   private activeSectionService = inject(ActiveSectionService);
   activeSection = computed(() => this.activeSectionService.section());

   @HostListener('window:scroll')
   reduceHeight () {
      const scrollTop = this.documentElement.scrollTop;
      const navbar = this.navBar().nativeElement;
      
      if (scrollTop > 20) {
         this.renderer.addClass(navbar, 'reduce-height');
      } else {
         this.renderer.removeClass(navbar, 'reduce-height');
      }
   }

   @HostListener('window:click', ['$event'])
   close (e: MouseEvent) {
      const navMenuElement = this.navMenu().nativeElement;

      if (e.target !== navMenuElement && !navMenuElement.contains(e.target as Node)) {
         this.changeIcon(e);
      }
   }

   changeIcon (event: MouseEvent) {
      const icon = event.target as HTMLElement;
      const barsIconElement = this.barsIcon().nativeElement;
      const crossIconElement = this.crossIcon().nativeElement;
      const navMenuElement = this.navMenu().nativeElement;

      if (icon.classList.contains('pi-bars')) {
         this.renderer.addClass(barsIconElement, 'hide-icon');
         this.renderer.removeClass(crossIconElement, 'hide-icon');
         this.renderer.removeClass(navMenuElement, 'hide-nav-menu');
      } else {
         this.renderer.addClass(crossIconElement, 'hide-icon');
         this.renderer.removeClass(barsIconElement, 'hide-icon');
         this.renderer.addClass(navMenuElement, 'hide-nav-menu');
      }
   }

   closeNavBar (e: MouseEvent) {
      this.changeIcon(e);
   }
}
