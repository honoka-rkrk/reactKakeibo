import React, { useState, useEffect, useCallback, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CreatePlan from '../../Container/Kakeibo/CreatePlan/createPlan';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '20% 10% 70%',
      padding: '2px',
      height: '100%'
    }
  })
);

const Kakeibo: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CreatePlan />
    </div>
  );
};

export default Kakeibo;
