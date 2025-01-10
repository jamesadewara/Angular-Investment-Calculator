import { Component, input } from '@angular/core';
import { type AnnualDataModel } from '../user-input/user-input.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = input<AnnualDataModel[]> ();
}
