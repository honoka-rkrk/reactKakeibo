import React, { useState, useRef, useContext, useEffect } from 'react';
import CompDetail from '../../../Component/Kakeibo/CreatePlan/detail';
import { KakeiboContext, setDetailPlan, setResultPlan } from '../Provider/provider';
import { itemName } from '../../demo-data';

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

  const getItemName = (idx: number): string | null => {
    let _itemName: string | null = null;
    if (itemName !== null && itemName.length > 0) {
      const itemNameIdx = itemName.findIndex((meta) => meta.index === idx);
      _itemName = itemNameIdx >= 0 ? itemName[idx].name : null;
    }
    return _itemName;
  };

  const createParam = (idx: number): string => {
    const itemName = getItemName(idx);
    const _name = itemName !== null ? itemName : '';

    return _name;
  };

  return (
    <CompDetail
      plan={plan}
      result={result}
      lastResult={kakeiboInfo.lastResultPlan}
      calcFlg={calcFlgs.current}
      PlanChange={PlanChange}
      ResultChange={ResultChange}
      createParam={createParam}
      itemLength={itemName.length}
    />
  );
};

export default Detail;
