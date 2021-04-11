import React,{useState,useRef} from 'react';
import CompDetail from '../../Component/CreatePlan/detail';


const Detail:React.FC = () => {
    const [plan,setPlan] = useState<Array<string>>([...Array(15).fill('0')]);
    const [result,setResult] = useState<Array<string>>([...Array(15).fill('0')]);
    const [lastResult,setLastResult] = useState<Array<number>>([...Array(15).fill('0')]);
    const calcFlg = useRef<boolean>(false);

    const PlanChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
        let newValue=plan.slice();
        newValue[type] = event.target.value;
        setPlan(newValue);
    };
    const ResultChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
        let newValue=result.slice();
        newValue[type] = event.target.value;
        setResult(newValue);
    };

    return(
        <CompDetail 
            plan={plan} 
            result={result} 
            lastResult={lastResult}
            calcFlg={calcFlg.current}
            PlanChange={PlanChange}
            ResultChange={ResultChange}
        />
    )
}



export default Detail;