import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { ActiveSectionService } from '../../services';

@Component({
   selector: 'app-dashboard-main',
   standalone: true,
   imports: [ButtonModule, RouterModule],
   templateUrl: './dashboard-main.component.html',
   styleUrl: './dashboard-main.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMainComponent implements OnInit {
   private activeSectionService = inject(ActiveSectionService);
   private router = inject(Router);
   actSection = computed(() => this.activeSectionService.section());
   
   ngOnInit (): void {
      const path = this.router.url.split('/').pop();

      if (path === 'dollars' || path === 'comparator') {
         this.activeSectionService.setActiveSection(path);
      }
   }

   changeSection (section: 'dollars' | 'comparator') {
      this.activeSectionService.setActiveSection(section);
   }
}
