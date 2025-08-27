import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { DashboardSectionService } from '../../../shared/services';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMainComponent implements OnDestroy {
  private router = inject(Router);
  private routerSubscription: Subscription;
  private dashboardService = inject(DashboardSectionService);
  activeSection = computed(() => this.dashboardService.getActiveSection());

  constructor () {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(event => {
        if (event.urlAfterRedirects.includes('dollars')) {
          this.dashboardService.setActiveSection('dollars');
        } else {
          this.dashboardService.setActiveSection('comparator');
        }
      });
  }
  
  ngOnDestroy () {
    this.routerSubscription.unsubscribe();
  }
}
