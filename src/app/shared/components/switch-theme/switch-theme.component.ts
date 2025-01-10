import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
   selector: 'app-switch-theme',
   standalone: true,
   imports: [FormsModule, InputSwitchModule],
   templateUrl: './switch-theme.component.html',
   styleUrl: './switch-theme.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchThemeComponent implements OnInit {
   private platformId = inject(PLATFORM_ID);
   private document = inject(DOCUMENT);
   private renderer = inject(Renderer2);
   private themeLink = this.document.getElementById('color-theme') as HTMLLinkElement;
   private html = this.document.querySelector('html');
   darkTheme = false;

   ngOnInit (): void {
      if (isPlatformBrowser(this.platformId)) {
         if (localStorage.getItem('color-theme') === 'dark') {
            this.darkTheme = true;
            this.changeTheme();
         }
      }
   }

   changeTheme () {
      if (this.darkTheme) {
         this.switchTheme('lara-dark-teal');
      } else {
         this.switchTheme('lara-light-teal');
      }
   }

   switchTheme (theme: string) {
      if (this.themeLink === null || this.html === null) return;
      
      this.renderer.setAttribute(this.themeLink, 'href', `${theme}.css`);

      if (theme.match(/dark/) !== null) {
         localStorage.setItem('color-theme', 'dark');
         this.renderer.addClass(this.html, 'dark');
      } else {
         localStorage.setItem('color-theme', 'light');
         this.renderer.removeClass(this.html, 'dark');
      }
   }
}
