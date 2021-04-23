import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AutoSizer, MultiGrid, GridCellProps } from 'react-virtualized';
import { Cols } from '../../../../Other/Component/cst-data';
import Box from '@material-ui/core/Box';
import FoodInput from '../../../Container/RightComponent/Food/foodInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    autoSizer: {
      '&:Reactvirtualized__Grid': {
        outline: 'none',
        borderBottom: `1px solid ${theme.palette.border.main}`
      }
    },
    borderT: {
      borderTop: `1px solid ${theme.palette.border.main}`
    },
    flexCenter: {
      textAlign: 'center'
    },
    flexRight: {
      textAlign: 'end'
    },
    flexLeft: {
      textAlign: 'start'
    },
    headerCell: {
      gridRow: '1'
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
  multigridref: React.RefObject<MultiGrid>;
  cols: Array<Cols>;
  mgWidth: number;
  mgHeight: (_height: number) => number;
  rowCount: number;
  rowHeight: number;
  headerRowCount: number;
};

const FoodMultiGrid: React.FC<FoodMultiGridProps> = (props: FoodMultiGridProps) => {
  const styles = useStyles();
  const {
    editMemo,
    editOutCome,
    editMemoChange,
    editOutComeChange,
    multigridref,
    cols,
    mgWidth,
    mgHeight,
    rowCount,
    rowHeight,
    headerRowCount
  } = props;

  const headerRenderer = (prop: GridCellProps) => (
    <Box
      key={prop.key}
      style={prop.style}
      className={`${cols[prop.columnIndex].style} ${styles.borderT} ${
        styles.flexCenter
      } ${styles.headerCell}`}
    >
      {cols[prop.columnIndex].name}
    </Box>
  );

  const bodyRenderer = (prop: GridCellProps) => {
    if (prop.columnIndex === 0) {
      return (
        <Box
          key={prop.key}
          style={prop.style}
          className={`${cols[prop.columnIndex].style} ${styles.flexLeft}`}
        >
          <FoodInput
            idx={prop.rowIndex - headerRowCount}
            value={
              editMemo[prop.rowIndex - headerRowCount] !== ''
                ? editMemo[prop.rowIndex - headerRowCount]
                : ''
            }
            editChange={editMemoChange}
            column={prop.columnIndex}
          />
        </Box>
      );
    } else if (prop.columnIndex === 1) {
      return (
        <Box
          key={prop.key}
          style={prop.style}
          className={`${cols[prop.columnIndex].style} ${styles.flexLeft}`}
        >
          <FoodInput
            idx={prop.rowIndex - headerRowCount}
            value={
              editOutCome[prop.rowIndex - headerRowCount] !== 0
                ? editOutCome[prop.rowIndex - headerRowCount].toString()
                : ''
            }
            editChange={editOutComeChange}
            column={prop.columnIndex}
          />
        </Box>
      );
    }
  };

  const cellRenderer = (prop: GridCellProps) => {
    if (prop.rowIndex < headerRowCount) {
      return headerRenderer(prop);
    } else {
      return bodyRenderer(prop);
    }
  };

  return (
    <AutoSizer className={styles.autoSizer}>
      {({ height }) => (
        <MultiGrid
          ref={multigridref}
          width={mgWidth}
          height={mgHeight(height)}
          rowCount={rowCount}
          columnCount={cols.length}
          rowHeight={rowHeight}
          columnWidth={({ index }) => cols[index].width}
          cellRenderer={(prop) => cellRenderer(prop)}
          fixedRowCount={headerRowCount}
        />
      )}
    </AutoSizer>
  );
};

export default React.memo(FoodMultiGrid);
