import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {Income} from '../../Container/CreatePlan/title'; 
import Calc from '../../Container/Calc/calc';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titlepaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:theme.palette.warning.main
      }
  }),
);

type TitleProps = {
    dispDate:string;
    minDate:Date;
    maxDate:Date ;
    selectedDate: Date | null;
    handleDateChange: (date: Date | null) => void;
    CalcClick: () => void;
    syunyu: Income;
    KyuuyoChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: number) => void;
    setSumPlan: React.Dispatch<React.SetStateAction<number | null>>;
}

const Title:React.FC<TitleProps> = (props:TitleProps) =>  {
  const styles = useStyles();
  const {
      dispDate,minDate,maxDate,selectedDate,handleDateChange,CalcClick,syunyu,KyuuyoChange,setSumPlan
  }=props

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Paper className={styles.titlepaper}>{dispDate}</Paper>
              <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="年月選択"
                  format="MM/yyyy"
                  views={["year", "month"]}
                  minDate={minDate}
                  maxDate={maxDate}
                  openTo="month"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                  'aria-label': 'change date',
                  }}
              />
        </MuiPickersUtilsProvider>
              <Calc setSumPlan={setSumPlan} />
              <Button variant="outlined" color="secondary">登録</Button>
      <FormControl>
          <InputLabel htmlFor="component-simple">給与</InputLabel>
          <Input id="component-simple" placeholder="0" value={syunyu === null ? null : syunyu.kyuuyo} onChange={(e) =>KyuuyoChange(e,0)} endAdornment={<InputAdornment position="end">￥</InputAdornment>}/>
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="component-simple">その他収入</InputLabel>
          <Input id="component-simple" placeholder="0" value={syunyu ===null ? null : syunyu.subIncome} onChange={(e) =>KyuuyoChange(e,1)} />
      </FormControl>
    </>
  );
}

export default Title;