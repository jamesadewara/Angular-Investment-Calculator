import { Injectable } from "@angular/core";
import { type AnnualDataModel, type UserInputModel } from "./user-input.model";

@Injectable({ providedIn: 'root' })
export class UserInputService {
    private annualData: AnnualDataModel[] = [];

    onCalculateResults(
        data: UserInputModel
    ) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            this.annualData.push(

                {
                    year: year,
                    interest: interestEarnedInYear,
                    valueEndOfYear: investmentValue,
                    annualInvestment: annualInvestment,
                    totalInterest: totalInterest,
                    totalAmountInvested: initialInvestment + annualInvestment * year,
                } as AnnualDataModel);
        }
        return this.annualData;
    }

    annualDataValue() {
        return this.annualData as AnnualDataModel[];
    }

}