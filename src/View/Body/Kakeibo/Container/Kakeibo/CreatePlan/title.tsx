import React, { useState, useEffect, useContext } from 'react';
import CompTitle from '../../../Component/Kakeibo/CreatePlan/title';
import { db } from '../../../../../../firebase';
import { KakeiboContext, setIncome } from '../Provider/provider';

const Title: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dispDate, setDispDate] = useState<string>(
    new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月'
  );
  const minDate: Date = new Date('2020-03-01');
  const maxDate: Date = new Date();
  const [syunyu, setSyunyu] = useState<Array<number>>([...Array(2).fill(0)]);
  const { kakeiboDispatch } = useContext(KakeiboContext);

  const fetchIncomeData = () => {
    const incomeRef = db.collection('202104');
    incomeRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const resData = doc.data();
        const newIncome: Array<number> = [resData.kyuuyo, resData.subIncome];
        setSyunyu(newIncome);
      });
    });
  };

  useEffect(() => {
    fetchIncomeData();
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date !== null) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const disp = year + '年' + month + '月';
      setDispDate(disp);
    }
  };

  const KyuuyoChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: number
  ) => {
    if (syunyu !== null) {
      if (type === 0) {
        const newValue = syunyu;
        newValue[0] = Number(event.target.value);
        kakeiboDispatch(setIncome(newValue));
        setSyunyu(newValue);
      } else if (type === 1) {
        const newValue = syunyu;
        newValue[1] = Number(event.target.value);
        kakeiboDispatch(setIncome(newValue));
        setSyunyu(newValue);
      }
    }
  };

  return (
    <CompTitle
      dispDate={dispDate}
      minDate={minDate}
      maxDate={maxDate}
      selectedDate={selectedDate}
      handleDateChange={handleDateChange}
      syunyu={syunyu}
      KyuuyoChange={KyuuyoChange}
    />
  );
};

export default Title;
