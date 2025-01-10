import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { NavBarComponent } from './shared/components';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, CommonModule, RippleModule, NavBarComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
   private primengConfig = inject(PrimeNGConfig);

   ngOnInit () {
      this.primengConfig.ripple = true;
   }
}
