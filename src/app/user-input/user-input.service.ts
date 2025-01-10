import { Injectable } from "@angular/core";
import { AnnualDataHistoryModel, type AnnualDataModel, type UserInputModel } from "./user-input.model";

@Injectable({ providedIn: 'root' })
export class UserInputService {
    private annualData: AnnualDataModel[] = [];
    private annualDataHistory: AnnualDataHistoryModel[] = [];

    constructor() {
        const annualDataHistory = localStorage.getItem('annualDataHistory');
        if (annualDataHistory) {
            this.annualDataHistory =
                JSON.parse(annualDataHistory);
        }
    }

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

        this.annualDataHistory.unshift({
            id: this.annualDataHistory.length + 1,
            date: new Date(),
            data: this.annualData
        } as AnnualDataHistoryModel);
        this.saveAnnualDataHistory();
        this.annualData = [];

    }

    annualHisotryDataValue() {
        return this.annualDataHistory as AnnualDataHistoryModel[];
    }

    removeHistoryData(id: string) {
        this.annualDataHistory = this.annualDataHistory.filter((history) => history.id.toString() != id);
        this.saveAnnualDataHistory();
    }

    private saveAnnualDataHistory() {
        localStorage.setItem('annualDataHistory', JSON.stringify(this.annualDataHistory));
    }
}