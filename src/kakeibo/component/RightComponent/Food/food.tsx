import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FoodMultiGridProps from '../../../Container/RightComponent/Food/foodMultiGrid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleCommon: {
      gridRow: '1',
      gridColumn: '1/3'
    }
  })
);

type FoodProps = {
  editMemo: Array<string>;
  editOutCome: Array<number>;
  editMemoChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => void;
  editOutComeChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => void;
};

const Food: React.FC<FoodProps> = (props: FoodProps) => {
  const styles = useStyles();
  const { editMemo, editOutCome, editMemoChange, editOutComeChange } = props;

  return (
    <>
      <Box className={styles.titleCommon}>食費</Box>
      <FoodMultiGridProps
        editMemo={editMemo}
        editOutCome={editOutCome}
        editMemoChange={editMemoChange}
        editOutComeChange={editOutComeChange}
      />
    </>
  );
};

export default React.memo(Food);
