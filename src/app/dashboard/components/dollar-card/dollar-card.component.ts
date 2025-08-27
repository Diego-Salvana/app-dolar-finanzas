import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DollarNamePipe } from '../../../shared/pipes/dollar-name.pipe';

@Component({
  selector: 'app-dollar-card',
  standalone: true,
  imports: [CommonModule, CardModule, DollarNamePipe],
  templateUrl: './dollar-card.component.html',
  styleUrl: './dollar-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DollarCardComponent {
  name = input.required<string>();
  buyRate = input.required<number>();
  sellRate = input.required<number>();
  lastUpdated = input.required<string>();
}
