import React, { useState, useRef, useContext, useEffect } from 'react';
import CompDetail from '../../Component/CreatePlan/detail';
import { KakeiboContext, setDetailPlan, setResultPlan } from '../Provider/provider';

const Detail: React.FC = () => {
  const [plan, setPlan] = useState<Array<number>>([...Array(15)].fill(0));
  const [result, setResult] = useState<Array<number>>([...Array(15).fill(0)]);
  const calcFlgs = useRef<boolean>(false);
  const { kakeiboInfo, kakeiboDispatch } = useContext(KakeiboContext);

  const PlanChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: number
  ) => {
    const newValue = plan.slice();
    newValue[type] = Number(event.target.value);
    setPlan(newValue);
  };
  const ResultChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: number
  ) => {
    const newValue = result.slice();
    newValue[type] = Number(event.target.value);
    setResult(newValue);
  };

  useEffect(() => {
    kakeiboDispatch(setDetailPlan(plan));
  }, [plan]);

  useEffect(() => {
    kakeiboDispatch(setResultPlan(result));
  }, [result]);

  return (
    <CompDetail
      plan={plan}
      result={result}
      lastResult={kakeiboInfo.lastResultPlan}
      calcFlg={calcFlgs.current}
      PlanChange={PlanChange}
      ResultChange={ResultChange}
    />
  );
};

export default Detail;
