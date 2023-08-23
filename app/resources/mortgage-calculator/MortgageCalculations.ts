import LoanCalc from "loan-calc"

export default class MortgageCalculations {
  CalculateDownPayment(totalCost: number, downPaymentPercentage: number) {
    return totalCost * (downPaymentPercentage * 0.01)
  }

  CalculateLoanAmount(totalCost: number, downPaymentPercentage) {
    return (
      totalCost - this.CalculateDownPayment(totalCost, downPaymentPercentage)
    )
  }

  CalculatePropertyTaxAmount(totalCost: number, propertyTaxPercentage: number) {
    return (totalCost * (propertyTaxPercentage * 0.01)) / 12
  }

  CalculateMonthlyPayment(
    loanAmount: number,
    interestRate: number,
    loanDurationTerm: number
  ) {
    return LoanCalc.paymentCalc({
      amount: loanAmount,
      rate: interestRate,
      termMonths: loanDurationTerm,
    })
  }

  CalculatePrincipleAmount(
    loanAmount: number,
    interestRate: number,
    duration: number
  ) {
    let monthlyPayment = this.CalculateMonthlyPayment(
      loanAmount,
      interestRate,
      duration
    )
    let interestPayment = this.CalculateInterestAmount(loanAmount, interestRate)
    console.log(monthlyPayment, interestPayment)
    let answer = monthlyPayment - interestPayment
    console.log(answer)
    return answer
  }
  CalculateInterestAmount(principal: number, interestRate: number) {
    let rate = interestRate * 0.01
    let amt = (principal * rate) / 12
    return amt
  }
}
