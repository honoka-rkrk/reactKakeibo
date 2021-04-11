import React,{useState,useEffect,useCallback,useRef} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    planpaper:{
        padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:theme.palette.warning.light
    }
  }),
);

type TotalProps = {
  sumPlan: number | null;
}



const CreatePlan:React.FC<TotalProps> = (props:TotalProps) =>  {
  const styles = useStyles();
  const {sumPlan} = props;

  return (
    <>
        <Paper className={styles.planpaper}>項目名</Paper>
        <Paper className={styles.planpaper}>{sumPlan === null ? '予算' : '予算： ' + sumPlan}</Paper>
        <Paper className={styles.planpaper}>実績</Paper>
        <Paper className={styles.planpaper}>＋ー</Paper> 
    </>
  );
}

export default CreatePlan;