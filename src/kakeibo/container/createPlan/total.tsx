import React,{useState,useEffect,useCallback,useRef} from 'react';
import CompTotal from '../../Component/CreatePlan/total';

type TotalProps = {
  sumPlan: number | null;
}

const Total:React.FC<TotalProps> = (props:TotalProps) =>  {
  const {sumPlan} = props;
  
  return (
    <>
        <CompTotal sumPlan={sumPlan}/>
    </>
  );
}

export default Total;