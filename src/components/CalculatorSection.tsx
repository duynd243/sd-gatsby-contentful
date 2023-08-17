import React, { useMemo, useState } from 'react';
import RangeSlider from './RangeSlider';
import { toast } from 'sonner';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function CalculatorSection() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(1);
  const [interestRate, setInterestRate] = useState(0.1);

  const loanAmount = useMemo(() => purchasePrice - downPayment, [purchasePrice, downPayment]);

  const monthlyRepayment = useMemo(() => {
    const numberOfMonthlyPayments = repaymentTime * 12;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonthlyPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfMonthlyPayments) - 1;
    return loanAmount * (numerator / denominator);
  }, [loanAmount, interestRate, repaymentTime]);

  return (
    <section id="calculator" className="grid md:grid-cols-2">
      {/*Calculator*/}
      <div className="bg-[#383F50] px-[3rem] pb-[4.31rem] pt-[4.06rem] md:flex md:justify-end md:pr-[2.87rem]">
        <div className="w-full max-w-[33.475rem]">
          <h1 className="text-[3.125rem] font-[900] leading-[140%] tracking-[0.03125rem] text-white">
            Mortgage Calculator
          </h1>

          {/*Description*/}
          <p className="text-[1.125rem] font-[400] leading-[180%] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>

          {/*Inputs*/}
          <div className="mt-8 grid grid-cols-2 gap-x-[1.33rem] gap-y-[1.38rem]">
            <RangeSlider
              label={`Purchase Price: ${currencyFormatter.format(purchasePrice)}`}
              value={[purchasePrice]}
              onValueChange={(value) => {
                setPurchasePrice(value[0]);
                if (value[0] < downPayment) {
                  toast.error('Purchase price cannot be less than down payment');
                  setPurchasePrice(downPayment);
                }
              }}
              min={0}
              max={1_000_000}
              step={1000}
            />
            <RangeSlider
              label={`Down Payment: ${currencyFormatter.format(downPayment)}`}
              value={[downPayment]}
              onValueChange={async (value) => {
                setDownPayment(value[0]);
                if (value[0] > purchasePrice) {
                  toast.error('Down payment cannot be more than purchase price');
                  setDownPayment(purchasePrice);
                }
              }}
              min={0}
              max={300_000}
              step={1000}
            />
            <RangeSlider
              label={`Repayment Time: ${repaymentTime} ${repaymentTime <= 1 ? 'year' : 'years'}`}
              value={[repaymentTime]}
              onValueChange={(value) => {
                setRepaymentTime(value[0]);
              }}
              min={1}
              max={60}
              step={1}
            />
            <RangeSlider
              label={`Interest Rate: ${interestRate}%`}
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={0.1}
              max={10}
              step={0.1}
            />
          </div>

          {/*Results*/}
          <div className="mt-8">
            <span className="text-[1.125rem] font-[900] leading-[180%] text-white">
              Loan amount:
            </span>
            <span className="text-[1.5rem] font-[900] leading-[180%] text-[#FF8049]">
              {' '}
              {currencyFormatter.format(loanAmount)}
            </span>
          </div>
          <div>
            <span className="text-[1.125rem] font-[900] leading-[180%] text-white">
              Estimated repayment per month:
            </span>
            <span className="text-[1.5rem] font-[900] leading-[180%] text-[#FF8049]">
              {' '}
              {currencyFormatter.format(monthlyRepayment)}
            </span>
          </div>
        </div>
      </div>

      {/*Info*/}
      <div className="px-[3rem] py-[3rem] md:pl-[3.6rem] md:pr-[9.37rem]">
        <h1 className="text-h1 text-[#27292E]">Try our awesome Calculator</h1>
        <p className="mt-[1.62rem] text-[1.125rem] font-[400] leading-[180%] text-[#585C65]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </p>

        <button className="btn mt-[3.13rem] px-[2.5rem] py-[0.94rem]">Register</button>
      </div>
    </section>
  );
}

export default CalculatorSection;
