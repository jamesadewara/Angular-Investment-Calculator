import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentHistoryComponent } from './investment-history/investment-history.component';
import { UserInputComponent } from './user-input/user-input.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderComponent, UserInputComponent, InvestmentHistoryComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
