export interface UserInputModel {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export interface AnnualDataModel {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}