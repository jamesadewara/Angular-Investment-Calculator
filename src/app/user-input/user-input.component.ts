import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type UserInputModel } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<UserInputModel>();

  enteredInitialInvestment = signal<string>('0');
  enteredAnnualInvestment = signal<string>('0');
  enteredExpectedReturn = signal<string>('5');
  enteredDuration = signal<string>('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: parseFloat(this.enteredInitialInvestment()),
      annualInvestment: parseFloat(this.enteredAnnualInvestment()),
      expectedReturn: parseFloat(this.enteredExpectedReturn()),
      duration: parseFloat(this.enteredDuration())
    } as UserInputModel);
  }
}
