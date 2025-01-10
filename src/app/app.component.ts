import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AnnualDataModel, UserInputModel } from './user-input/user-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputService } from './user-input/user-input.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'starting-project';
resultsData: AnnualDataModel[];

constructor(
  private inputService: UserInputService
) {
  this.resultsData = this.inputService.annualDataValue();
}

  onCalculateInvestmentResults(data: UserInputModel) {
    this.inputService.onCalculateResults(data);
  }
}
