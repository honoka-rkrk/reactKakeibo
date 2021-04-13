import React ,{useCallback,useContext,useEffect}from 'react';
import CompCalc from '../../Component/Calc/calc';
import {KakeiboContext,setSumDetailPlan,setCalcSumFlg, setSumResultPlan,setLastResultPlan,setSumLastResultPlan} from '../Provider/provider';

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

        const resultArray = kakeiboInfo.resultPlan;
        let resultTotal = resultArray.reduce((prev,current) =>prev + current,0);
        kakeiboDispatch(setSumResultPlan(resultTotal));
        console.log(resultTotal);

        const plan = planArray.slice();
        const result = resultArray.slice();
        let prevLastResult:Array<number> = Array(15);
        for(let i = 0;i<15;i++){
            prevLastResult[i] = plan[i] -result[i];
        }
        kakeiboDispatch(setLastResultPlan(prevLastResult));
        kakeiboDispatch(setSumLastResultPlan(prevLastResult.reduce((prev,current) =>prev + current,0)));
    },[kakeiboInfo.detailPlan,kakeiboInfo.resultPlan])

    useEffect(() => {
        console.log(kakeiboInfo.resultPlan);
    },[kakeiboInfo.resultPlan])

 return <CompCalc calcClick={CalcClick}/>
}

export default Calc;