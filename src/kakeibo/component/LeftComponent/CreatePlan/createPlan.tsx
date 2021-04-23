import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Title from '../../../Container/LeftComponent/CreatePlan/title';
import Total from '../../../Container/LeftComponent/CreatePlan/total';
import Detail from '../../../Container/LeftComponent/CreatePlan/detail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleCommon: {
      padding: theme.spacing(2),
      gap: '4px',
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      gridTemplateRows: '50% 25% 25%',
      justifyContent: 'center'
    },
    total: {
      gap: '4px',
      padding: theme.spacing(2),
      display: 'grid',
      gridColumn: '1',
      gridRow: '2',
      gridTemplateColumns: '19% 27% 27% 27%'
    },
    detailCommon: {
      display: 'grid',
      gap: '4px',
      padding: theme.spacing(2),
      gridColumn: '1',
      gridRow: '3',
      gridTemplateRows: 'repeat(100%/15)',
      gridTemplateColumns: '19% 27% 27% 27%'
    }
  })
);

const CreatePlan: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.titleCommon}>
        <Title />
      </Box>
      <Box className={styles.total}>
        <Total />
      </Box>
      <Box className={styles.detailCommon}>
        <Detail />
      </Box>
    </>
  );
};

export default CreatePlan;
