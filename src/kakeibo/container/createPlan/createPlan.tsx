import React,{useState,useContext} from 'react';
import CompCreate from '../../Component/CreatePlan/createPlan';
import {KakeiboContext,setInitialState} from '../Provider/provider';

const CreatePlan:React.FC = () => {
    const [sumPlan,setSumPlan] = useState<number|null>(null);
    const {kakeiboInfo,kakeiboDispatch} = useContext(KakeiboContext);

    return(
        <CompCreate sumPlan={sumPlan} setSumPlan={setSumPlan}/>
    )
}

export default CreatePlan;