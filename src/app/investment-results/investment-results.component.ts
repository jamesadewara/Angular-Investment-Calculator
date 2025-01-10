import { Component, input } from '@angular/core';
import { type AnnualDataModel } from '../user-input/user-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = input<AnnualDataModel[]> ();
}
