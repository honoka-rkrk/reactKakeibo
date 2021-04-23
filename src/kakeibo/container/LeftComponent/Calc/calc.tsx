import React, { useCallback, useContext } from 'react';
import CompCalc from '../../../Component/LeftComponent/Calc/calc';
import {
  KakeiboContext,
  setSumDetailPlan,
  setSumResultPlan,
  setLastResultPlan,
  setSumLastResultPlan
} from '../Provider/provider';

const Calc: React.FC = () => {
  const { kakeiboInfo, kakeiboDispatch } = useContext(KakeiboContext);

  //計算ボタンを押した時の処理
  const CalcClick = useCallback(() => {
    //予算の合計を計算してstateに入れる
    const planArray = kakeiboInfo.detailPlan;
    const planTotal = planArray.reduce((prev, current) => prev + current, 0);
    kakeiboDispatch(setSumDetailPlan(planTotal));

    //実績の合計を計算してstateに入れる
    const resultArray = kakeiboInfo.resultPlan;
    const resultTotal = resultArray.reduce((prev, current) => prev + current, 0);
    kakeiboDispatch(setSumResultPlan(resultTotal));

    //ボタンを押した時の予算ー実績をしてそれぞれの合計の差と項目ごとの差をstateに入れる
    const plan = planArray.slice();
    const result = resultArray.slice();
    const prevLastResult: Array<number> = Array(15);
    for (let i = 0; i < 15; i++) {
      prevLastResult[i] = plan[i] - result[i];
    }
    kakeiboDispatch(setLastResultPlan(prevLastResult));
    kakeiboDispatch(
      setSumLastResultPlan(
        prevLastResult.reduce((prev, current) => prev + current, 0)
      )
    );
  }, [kakeiboInfo.detailPlan, kakeiboInfo.resultPlan]);

  return <CompCalc calcClick={CalcClick} />;
};

export default Calc;
