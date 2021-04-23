import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { MultiGrid } from 'react-virtualized';
import { Cols } from '../../../../Other/Component/cst-data';
import CompFoodMultiGrid from '../../../Component/RightComponent/Food/foodMultiGrid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    borderT: {
      borderTop: `1px solid ${theme.palette.border.main}`
    },
    borderR: {
      borderRight: `1px solid ${theme.palette.border.main}`
    },
    borderL: {
      borderLeft: `1px solid ${theme.palette.border.main}`
    },
    borderB: {
      borderBottom: `1px solid ${theme.palette.border.main}`
    }
  })
);

type FoodMultiGridProps = {
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

const FoodMultiGrid: React.FC<FoodMultiGridProps> = (props: FoodMultiGridProps) => {
  const styles = useStyles();
  const { editMemo, editOutCome, editMemoChange, editOutComeChange } = props;
  const HEADER_ROW_COUNT = 1;
  const ROW_HEIGHT = 30;
  const MIN_ROW_COUNT = 10;
  const SCROLLBAR_SIZE = 17;
  const multigridref = React.createRef<MultiGrid>();
  const itemCnt = 15;

  useEffect(() => {
    multigridref.current?.forceUpdateGrids();
  }, [multigridref]);

  const cols: Array<Cols> = [
    {
      name: 'メモ欄',
      width: 300,
      style: `${styles.borderR} ${styles.borderB} ${styles.borderL}`
    },
    {
      name: '金額',
      width: 150,
      style: `${styles.borderR} ${styles.borderB} ${styles.borderL}`
    }
  ];

  const mgWidth = () => {
    let sumColWidth = 0;
    cols.forEach((item) => {
      sumColWidth += item.width;
    });
    return itemCnt <= MIN_ROW_COUNT ? sumColWidth : sumColWidth + SCROLLBAR_SIZE;
  };

  const mgHeight = (_height: number) => {
    return itemCnt <= MIN_ROW_COUNT
      ? (itemCnt + HEADER_ROW_COUNT) * ROW_HEIGHT
      : _height;
  };

  return (
    <CompFoodMultiGrid
      editMemo={editMemo}
      editOutCome={editOutCome}
      editMemoChange={editMemoChange}
      editOutComeChange={editOutComeChange}
      multigridref={multigridref}
      cols={cols}
      mgWidth={mgWidth()}
      mgHeight={mgHeight}
      rowCount={itemCnt + HEADER_ROW_COUNT}
      rowHeight={ROW_HEIGHT}
      headerRowCount={HEADER_ROW_COUNT}
    />
  );
};

export default React.memo(FoodMultiGrid);
