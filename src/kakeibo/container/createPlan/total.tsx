import React,{useState,useEffect,useCallback,useRef,useContext} from 'react';
import CompTotal from '../../Component/CreatePlan/total';
import {KakeiboContext} from '../../Container/Provider/provider';

type TotalProps = {
  sumPlan: number | null;
}

const Total:React.FC<TotalProps> = (props:TotalProps) =>  {
  const {sumPlan} = props;
  const {kakeiboInfo} =useContext(KakeiboContext);

  useEffect(() => {
    console.log(kakeiboInfo.resultPlan);
  },[kakeiboInfo.resultPlan])
  
  return (
    <>
        <CompTotal sumDetailPlan={kakeiboInfo.sumDetailPlan} sumResultPlan={kakeiboInfo.sumResultPlan} sumLastResultPlan={kakeiboInfo.sumLastResultPlan}/>
    </>
  );
}

export default Total;