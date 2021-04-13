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
  sumDetailPlan:number,
  sumResultPlan:number,
  sumLastResultPlan: number
}



const Total:React.FC<TotalProps> = (props:TotalProps) =>  {
  const styles = useStyles();
  const {sumDetailPlan,sumResultPlan,sumLastResultPlan} = props;
  console.log(sumResultPlan);
  console.log(sumLastResultPlan);

  return (
    <>
        <Paper className={styles.planpaper}>項目名</Paper>
        <Paper className={styles.planpaper}>{sumDetailPlan === null ? '予算' : '予算： ' + sumDetailPlan}</Paper>
        <Paper className={styles.planpaper}>{sumResultPlan === null ? '実績' : '実績:  ' + sumResultPlan}</Paper>
        <Paper className={styles.planpaper}>{sumLastResultPlan === null ? '＋ー' : '＋ー:  ' + sumLastResultPlan}</Paper> 
    </>
  );
}

export default Total;