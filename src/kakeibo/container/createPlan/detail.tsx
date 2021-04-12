import React,{useState,useRef,useContext,useEffect} from 'react';
import CompDetail from '../../Component/CreatePlan/detail';
import {KakeiboContext,setCalcSumFlg,setDetailPlan} from '../Provider/provider';


const Detail:React.FC = () => {
    const [plan,setPlan] = useState<Array<number>>([...Array(15)].fill(0));
    const [result,setResult] = useState<Array<string>>([...Array(15).fill('0')]);
    const [lastResult,setLastResult] = useState<Array<number>>([...Array(15).fill('0')]);
    const calcFlgs = useRef<boolean>(false);
    const {kakeiboInfo,kakeiboDispatch} = useContext(KakeiboContext);
    

    const PlanChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
        let newValue=plan.slice();
        newValue[type] = Number(event.target.value);
        setPlan(newValue);
    };
    const ResultChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
        let newValue=result.slice();
        newValue[type] = event.target.value;
        setResult(newValue);
    };

    useEffect(() => {
        if(kakeiboInfo.calcSumFlg === true){
            kakeiboDispatch(setDetailPlan(plan));
        }
        kakeiboDispatch(setCalcSumFlg(false));
    },[kakeiboInfo.calcSumFlg]);

    return(
        <CompDetail 
            plan={plan} 
            result={result} 
            lastResult={lastResult}
            calcFlg={calcFlgs.current}
            PlanChange={PlanChange}
            ResultChange={ResultChange}
        />
    )
}



export default Detail;