import React, { useContext, useCallback } from 'react';
import { db } from '../../../../firebase';
import { KakeiboContext } from '../Provider/provider';
import CompRegister from '../../../Component/LeftComponent/Register/register';

const Register: React.FC = () => {
  const { kakeiboInfo } = useContext(KakeiboContext);

  const registerClick = useCallback(() => {
    db.collection('Kakeibo')
      .doc('202105')
      .set({
        detail: {
          plan: kakeiboInfo.detailPlan,
          result: kakeiboInfo.resultPlan,
          lastResult: kakeiboInfo.lastResultPlan
        },
        income: {
          mainIncome: kakeiboInfo.mainIncome,
          subIncome: kakeiboInfo.subIncome
        }
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }, [
    kakeiboInfo.detailPlan,
    kakeiboInfo.resultPlan,
    kakeiboInfo.lastResultPlan,
    kakeiboInfo.mainIncome,
    kakeiboInfo.subIncome
  ]);
  return (
    <>
      <CompRegister registerClick={registerClick} />
    </>
  );
};

export default Register;
