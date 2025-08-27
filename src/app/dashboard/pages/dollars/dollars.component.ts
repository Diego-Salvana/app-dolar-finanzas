import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';
import { DollarCardComponent } from '../../components';
import { DollarsService } from '../../services';
import { Dollar } from '../../interfaces';

@Component({
  selector: 'app-dollars',
  standalone: true,
  imports: [CommonModule, DollarCardComponent, SkeletonModule],
  templateUrl: './dollars.component.html',
  styleUrl: './dollars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DollarsComponent implements OnInit {
  private dollarsService = inject(DollarsService);
  dollars$?: Observable<Dollar[]>;
  skeletons = Array(6).fill(null);

  ngOnInit () {
    this.dollars$ = this.dollarsService.getDollars().pipe(
      map(dollarArr => dollarArr.filter(dollar => dollar.casa !== 'mayorista'))
    );
  }
}
