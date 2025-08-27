import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
  signal,
  viewChild
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';
import { DOCUMENT, NgClass } from '@angular/common';
import { DashboardSectionService } from '../../services';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass, RouterModule, SwitchThemeComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  private navBar = viewChild.required<ElementRef<HTMLElement>>('navBar');
  private navMenu = viewChild.required<ElementRef<HTMLElement>>('navMenu');
  private dashboardSectionService = inject(DashboardSectionService);
  dashboardSection = computed(() => this.dashboardSectionService.getActiveSection());
  menuVisibility = signal(false);
  hideIconClass = 'hide-icon';
  hideNavMenuClass = 'hide-nav-menu';

  @HostListener('window:scroll')
  reduceHeight () {
    const htmlTop = this.document.documentElement.scrollTop;
    const navbar = this.navBar().nativeElement;

    if (htmlTop > 20) {
      this.renderer.addClass(navbar, 'reduce-height');
    } else {
      this.renderer.removeClass(navbar, 'reduce-height');
    }
  }

  @HostListener('window:click', ['$event'])
  clickHandler (event: MouseEvent) {
    const navMenuElement = this.navMenu().nativeElement;
    const target = event.target as HTMLElement;

    if (target !== navMenuElement && !navMenuElement.contains(target)) {
      this.changeVisibility(target);
    }
  }

  changeVisibility (target: HTMLElement) {
    if (target.classList.contains('pi-bars')) {
      this.menuVisibility.set(true);
    } else {
      this.menuVisibility.set(false);
    }
  }

  closeNavBar () {
    this.menuVisibility.set(false);
  }
}
