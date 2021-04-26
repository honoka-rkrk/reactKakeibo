import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inpBase: {
      gridTemplateRows: 'repeat(2,50%)',
      gridTemplateColumns: '1fr 0px',
      padding: 0
    },
    innerInpCommon: {
      width: '100px',
      height: '29px',
      padding: '0 4px 0 0',
      textAlign: 'right'
    },
    inpBox: {
      gridArea: 'inpbox',
      height: 'calc(100%-1px)'
    }
  })
);

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
  const styles = useStyles();

  return (
    <Input
      className={`${styles.inpBase},${styles.innerInpCommon}`}
      key={`result_${column}_${idx}`}
      id={`result_${column}_${idx}`}
      value={value}
      onChange={(e) => editChange(e, idx)}
      disableUnderline={true}
    />
  );
};

export default React.memo(FoodInput);
