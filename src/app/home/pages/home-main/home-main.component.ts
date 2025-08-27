import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FeatureCardComponent } from '../../components';
import { featuresData } from '../../../mock/features-data';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [RouterModule, ButtonModule, FeatureCardComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMainComponent {
  featureList = featuresData;
}
