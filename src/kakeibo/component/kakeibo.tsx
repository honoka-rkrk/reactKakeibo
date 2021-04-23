import React, { useState, useEffect, useCallback, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CreatePlan from '../Container/LeftComponent/CreatePlan/createPlan';
import WriteDetail from '../Container/RightComponent/writeDetail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      gridTemplateRows: '100%',
      padding: '2px',
      height: '100%'
    },
    leftCommon: {
      display: 'grid',
      gridColumn: '1',
      gridRow: '1',
      gridTemplateRows: '20% 10% 70%'
    },
    rightCommon: {
      display: 'grid',
      gridColumn: '2',
      gridRow: '1',
      padding: '6px',
      gridTemplateColumns: '50% 50%',
      gridTemplateRows: '25% 25% 25% 25%'
    }
  })
);

const Kakeibo: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Box className={styles.leftCommon}>
        <CreatePlan />
      </Box>

      <Box className={styles.rightCommon}>
        <WriteDetail />
      </Box>
    </div>
  );
};

export default Kakeibo;
