import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type UserInputModel } from './user-input/user-input.model';
import { UserInputService } from './user-input/user-input.service';
import { InvestmentHistoryComponent } from "./investment-history/investment-history.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'starting-project';

  private inputService = inject(UserInputService);

  constructor(
  ) {
  }

  onCalculateInvestmentResults(data: UserInputModel) {
    this.inputService.onCalculateResults(data);
  }
}
