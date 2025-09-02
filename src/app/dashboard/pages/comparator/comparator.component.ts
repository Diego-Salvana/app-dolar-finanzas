import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { Subscription } from 'rxjs';
import { ComparatorForm } from '../../interfaces';

@Component({
  selector: 'app-comparator',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumberModule, AccordionModule, InputGroupModule, InputGroupAddonModule, ButtonModule],
  templateUrl: './comparator.component.html',
  styleUrl: './comparator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComparatorComponent implements AfterViewInit, OnDestroy {
  private comparatorForm = viewChild<NgForm>('comparatorForm');
  private subscription?: Subscription;
  price?: number;
  interest: number | null = null;
  installments?: number;
  expectedReturn?: number;
  installmentValue?: number;
  initialAmount?: number;

  ngAfterViewInit () {
    this.subscription = this.comparatorForm()?.valueChanges?.subscribe((data: ComparatorForm) => {
      if (data.price > 0 && data.interest !== null && data.interest >= 0 && data.installments > 0) {
        this.installmentValue = data.price * (1 + data.interest / 100) / data.installments;
      } else {
        this.installmentValue = undefined;
      }

      if (data.expectedReturn && this.installmentValue && data.installments) {
        this.initialAmount = this.installmentValue *
          (1 - Math.pow(1 + data.expectedReturn / 100, -data.installments)) /
          (data.expectedReturn / 100);
      } else {
        this.initialAmount = undefined;
      }
    });
  }

  ngOnDestroy () {
    this.subscription?.unsubscribe();
  }

  cleanForm () {
    this.comparatorForm()?.reset();
  }
}
