import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FoodMultiGridProps from '../../../Container/RightComponent/Food/foodMultiGrid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleCommon: {
      gridRow: '1',
      gridColumn: '1/3'
    },
    headerMemo: {
      gridRow: '2',
      gridColumn: '1',
      textAlign: 'center',
      padding: '6px'
    },
    headerOutCome: {
      gridRow: '2',
      gridColumn: '2',
      textAlign: 'center',
      padding: '4px'
    },
    allTableCommon: {
      gridRow: '3',
      gridColumn: '1/3',
      display: 'grid',
      gridTemplateRows: 'calc(100%/6)'
    },
    table1: {
      gridRow: '1',
      backgroundColor: '#fff'
    },
    calc1: {
      gridRow: '2'
    },
    table2: {
      gridRow: '3',
      backgroundColor: '#fff'
    },
    calc2: {
      gridRow: '4'
    },
    table3: {
      gridRow: '5',
      backgroundColor: '#fff'
    },
    calc3: {
      gridRow: '6'
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
      <Box className={styles.headerMemo}>メモ</Box>
      <Box className={styles.headerOutCome}>金額</Box>
      <Box className={styles.allTableCommon}>
        <Box className={styles.table1}>
          <FoodMultiGridProps
            editMemo={editMemo}
            editOutCome={editOutCome}
            editMemoChange={editMemoChange}
            editOutComeChange={editOutComeChange}
          />
        </Box>
        <Box className={styles.calc1}>calc</Box>
        <Box className={styles.table2}>
          <FoodMultiGridProps
            editMemo={editMemo}
            editOutCome={editOutCome}
            editMemoChange={editMemoChange}
            editOutComeChange={editOutComeChange}
          />
        </Box>
        <Box className={styles.calc2}>calc2</Box>
        <Box className={styles.table3}>
          <FoodMultiGridProps
            editMemo={editMemo}
            editOutCome={editOutCome}
            editMemoChange={editMemoChange}
            editOutComeChange={editOutComeChange}
          />
        </Box>
        <Box className={styles.calc3}>calc3</Box>
      </Box>
    </>
  );
};

export default React.memo(Food);
