import React ,{useCallback,useContext}from 'react';
import CompCalc from '../../Component/Calc/calc';
import {KakeiboContext,setSumDetailPlan,setCalcSumFlg} from '../Provider/provider';

type CalcProps = {
    setSumPlan: React.Dispatch<React.SetStateAction<number | null>>;
}

const Calc:React.FC<CalcProps> = (props:CalcProps) => {
    const {setSumPlan} =  props;
    const {kakeiboInfo,kakeiboDispatch} = useContext(KakeiboContext)
    

    const CalcClick = useCallback(() => {
        const planArray = kakeiboInfo.detailPlan;
        let planTotal = planArray.reduce((prev,current)=>prev + current,0);
        kakeiboDispatch(setSumDetailPlan(planTotal));
        kakeiboDispatch(setCalcSumFlg(true));
    },[])

 return <CompCalc calcClick={CalcClick}/>
}

export default Calc;