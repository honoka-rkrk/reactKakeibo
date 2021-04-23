import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Food from '../../Container/RightComponent/Food/food';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    writeDetailCommon: {
      padding: theme.spacing(2),
      gap: '4px',
      display: 'grid',
      gridTemplateColumns: '60% 40%',
      gridTemplateRows: '100px calc(100% - 100px)',
      justifyContent: 'center'
    },
    food: {
      gridColumn: '1',
      gridRow: '1/4'
    },
    daily: {
      gridColumn: '1',
      gridRow: '4'
    },
    credit: {
      gridColumn: '2',
      gridRow: '1/3'
    },
    entertainment: {
      gridColumn: '2',
      gridRow: '3/5'
    }
  })
);

const WriteDetail: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Box className={`${styles.writeDetailCommon} ${styles.food}`}>
        <Food />
      </Box>
      <Box className={`${styles.writeDetailCommon} ${styles.daily}`}>daily</Box>
      <Box className={`${styles.writeDetailCommon} ${styles.credit}`}>credit</Box>
      <Box className={`${styles.writeDetailCommon} ${styles.entertainment}`}>
        entertainment
      </Box>
    </>
  );
};

export default WriteDetail;
