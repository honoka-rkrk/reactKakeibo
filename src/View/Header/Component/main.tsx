import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Header from '../Container/Header/header';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '120px'
    }
  })
);
const Main: React.FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Header />
    </Box>
  );
};

export default Main;
