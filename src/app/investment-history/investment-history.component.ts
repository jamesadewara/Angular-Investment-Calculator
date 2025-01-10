import { Component, computed, inject, input, signal } from '@angular/core';
import { AnnualDataHistoryModel, AnnualDataModel } from '../user-input/user-input.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInputService } from '../user-input/user-input.service';

@Component({
  selector: 'app-investment-history',
  imports: [DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './investment-history.component.html',
  styleUrl: './investment-history.component.css'
})
export class InvestmentHistoryComponent {
  queries = signal<string>('');
  history: AnnualDataHistoryModel[];
  private inputService = inject(UserInputService);
  constructor(
  ) {

    this.history = this.inputService.annualHisotryDataValue();
  }

  delHistoryData(id: string) {
    this.inputService.removeHistoryData(id);
    this.history = this.inputService.annualHisotryDataValue();
  }

  search() {
    if (this.queries().length > 1) {
      this.history = this.history.filter((history) => history.date.toString().toLowerCase().includes(this.queries().toLowerCase()));

    } else {
      this.history = this.inputService.annualHisotryDataValue();
    }

  }
}
