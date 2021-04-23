import React from 'react';
import Input from '@material-ui/core/Input';

type FoodInputProps = {
  idx: number;
  value: string;
  editChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => void;
  column: number;
};

const FoodInput: React.FC<FoodInputProps> = (props: FoodInputProps) => {
  const { idx, value, editChange, column } = props;

  return (
    <Input
      key={`result_${column}_${idx}`}
      id={`result_${column}_${idx}`}
      value={value[idx]}
      onChange={(e) => editChange(e, idx)}
    />
  );
};

export default React.memo(FoodInput);
