import React, { useContext } from 'react';
import CompTotal from '../../Component/CreatePlan/total';
import { KakeiboContext } from '../../Container/Provider/provider';

const Total: React.FC = () => {
  const { kakeiboInfo } = useContext(KakeiboContext);

  return (
    <>
      <CompTotal
        sumDetailPlan={kakeiboInfo.sumDetailPlan}
        sumResultPlan={kakeiboInfo.sumResultPlan}
        sumLastResultPlan={kakeiboInfo.sumLastResultPlan}
      />
    </>
  );
};

export default Total;
