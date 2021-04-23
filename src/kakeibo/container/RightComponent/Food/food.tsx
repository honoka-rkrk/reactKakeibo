import React, { useCallback, useState } from 'react';
import CompFood from '../../../Component/RightComponent/Food/food';

const Food: React.FC = () => {
  const [editMemo, setEditMemo] = useState<Array<string>>(
    Array<string>(20).fill('')
  );
  const [editOutCome, setEditOutCome] = useState<Array<number>>(
    Array<number>(20).fill(0)
  );

  const editMemoChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      idx: number
    ) => {
      setEditMemo((prev) => {
        const newValue = [...prev];
        console.log(idx);
        newValue[idx] = event.target.value;
        console.log(newValue);
        return newValue;
      });
    },
    [setEditMemo]
  );

  const editOutComeChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      idx: number
    ) => {
      setEditOutCome((prev) => {
        const newValue = [...prev];
        newValue[idx] = Number(event.target.value);
        return newValue;
      });
    },
    [setEditOutCome]
  );

  return (
    <CompFood
      editMemo={editMemo}
      editOutCome={editOutCome}
      editMemoChange={editMemoChange}
      editOutComeChange={editOutComeChange}
    />
  );
};

export default React.memo(Food);
