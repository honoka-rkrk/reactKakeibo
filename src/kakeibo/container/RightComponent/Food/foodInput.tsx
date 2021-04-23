import React from 'react';
import CompFoodInput from '../../../Component/RightComponent/Food/foodInput';

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
    <CompFoodInput idx={idx} value={value} editChange={editChange} column={column} />
  );
};

export default React.memo(FoodInput);
