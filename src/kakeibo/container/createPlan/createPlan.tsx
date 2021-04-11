import React,{useState} from 'react';
import CompCreate from '../../Component/CreatePlan/createPlan';

const CreatePlan:React.FC = () => {
    const [sumPlan,setSumPlan] = useState<number|null>(null);
    

    return(
        <CompCreate sumPlan={sumPlan} setSumPlan={setSumPlan}/>
    )
}

export default CreatePlan;