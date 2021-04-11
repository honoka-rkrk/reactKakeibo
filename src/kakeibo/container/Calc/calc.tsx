import React from 'react';
import CompCalc from '../../Component/Calc/calc';

type CalcProps = {
    setSumPlan: React.Dispatch<React.SetStateAction<number | null>>;
}

const Calc:React.FC<CalcProps> = (props:CalcProps) => {
    const {setSumPlan} =  props;

    const planCalc = (planArray:Array<number>) => {
        let planTotal = planArray.reduce((prev,current)=>prev + current,0);
        setSumPlan(planTotal);
    }

 return <CompCalc />
}

export default Calc;