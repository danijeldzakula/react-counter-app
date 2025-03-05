import { useEffect } from "react";
import { CounterProvider } from "../../context/CounterProvider";
import { SalaryProvider } from "../../context/salary/SalaryProvider";
import Counter from "./_components/Counter";
import Salary from "./_components/Salary";

export default function AboutUs() {
  useEffect(() => {
    setTimeout(() => {
      console.log('re-render')
    }, 5000)
  }, [])

  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>

      <SalaryProvider>
        <Salary /> 
      </SalaryProvider>
    </>
  )
}
