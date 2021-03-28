import React,{useState,useEffect,useCallback,useRef} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    titlepaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    planpaper:{
        padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    inputstyle:{
        textAlign:'center'
    }
  }),
);




const CreatePlan:React.FC = () =>  {
  const styles = useStyles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date()
  );
  const [dispDate,setDispDate] = useState<string>((new Date().getFullYear()) + '年' + (new Date().getMonth()+1) + '月');
  const [syunyu, setSyunyu] = useState<Array<string>>([...Array(2).fill('0')]);
  const [plan,setPlan] = useState<Array<string>>([...Array(15).fill('0')]);
  const [result,setResult] = useState<Array<string>>([...Array(15).fill('0')]);
  const [lastResult,setLastResult] = useState<Array<number>>([...Array(15).fill('0')]);
  const calcFlg = useRef<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if(date !== null) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let disp = year + '年' + month  + '月'
        setDispDate(disp);
    }
  };


  const KyuuyoChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
    let newValue=syunyu.slice();
    newValue[type] = event.target.value;
    setSyunyu(newValue);
  };

  const PlanChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
    let newValue=plan.slice();
    newValue[type] = event.target.value;
    setPlan(newValue);
  };

  const ResultChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
    let newValue=result.slice();
    newValue[type] = event.target.value;
    setResult(newValue);
  };

  const CalcClick = () => {
    setLastResult(lastResult.map((item,index) => Number(plan[index]) - Number(result[index])));
    calcFlg.current = true;
  };

  return (
    <div className={styles.root}>
        
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <Paper className={styles.titlepaper}>{dispDate}</Paper>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/yyyy"
                    views={["year", "month"]}
                    minDate={new Date("2020-03-01")}
                    maxDate={new Date()}
                    openTo="month"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                />
                <Button variant="outlined" color="secondary" onClick={() =>CalcClick()}>計算</Button>
                <Button variant="outlined" color="secondary">登録</Button>
            </Grid>
        </MuiPickersUtilsProvider>
            
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="component-simple">給与</InputLabel>
                            <Input  id="component-simple" value={syunyu[0]} onChange={(e) =>KyuuyoChange(e,0)} endAdornment={<InputAdornment position="end">￥</InputAdornment>}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="component-simple">その他収入</InputLabel>
                            <Input id="component-simple" value={syunyu[1]} onChange={(e) =>KyuuyoChange(e,1)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>合計</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>予算</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>実績</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>＋ー</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>家賃</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[0]} onChange={(e) =>PlanChange(e,0)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[0]} onChange={(e) =>ResultChange(e,0)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[0]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>奨学金</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[1]} onChange={(e) =>PlanChange(e,1)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[1]} onChange={(e) =>ResultChange(e,1)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[1]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>ガス</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[2]} onChange={(e) =>PlanChange(e,2)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[2]} onChange={(e) =>ResultChange(e,2)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[2]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>水道</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[3]} onChange={(e) =>PlanChange(e,3)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[3]} onChange={(e) =>ResultChange(e,3)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[3]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>電気</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[4]} onChange={(e) =>PlanChange(e,4)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[4]} onChange={(e) =>ResultChange(e,4)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[4]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>21日</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[5]} onChange={(e) =>PlanChange(e,5)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[5]} onChange={(e) =>ResultChange(e,5)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[5]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>交際費</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[6]} onChange={(e) =>PlanChange(e,6)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[6]} onChange={(e) =>ResultChange(e,6)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[6]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>食費</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[7]} onChange={(e) =>PlanChange(e,7)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[7]} onChange={(e) =>ResultChange(e,7)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[7]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>日用品</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[8]} onChange={(e) =>PlanChange(e,8)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[8]} onChange={(e) =>ResultChange(e,8)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[8]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>美容室</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[9]} onChange={(e) =>PlanChange(e,9)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[9]} onChange={(e) =>ResultChange(e,9)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[9]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>携帯</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[10]} onChange={(e) =>PlanChange(e,10)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[10]} onChange={(e) =>ResultChange(e,10)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[10]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>貯金</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[11]} onChange={(e) =>PlanChange(e,11)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[11]} onChange={(e) =>ResultChange(e,11)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[12]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>プレゼント貯金</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[12]} onChange={(e) =>PlanChange(e,12)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[12]} onChange={(e) =>ResultChange(e,12)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[12]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>クレジット</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[13]} onChange={(e) =>PlanChange(e,13)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[13]} onChange={(e) =>ResultChange(e,13)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>{calcFlg.current === false ? '+-' : lastResult[13]}</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper}>予備</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={plan[14]} onChange={(e) =>PlanChange(e,14)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>
                            <Input id="component-simple" value={result[14]} onChange={(e) =>ResultChange(e,14)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={styles.planpaper} >{calcFlg.current === false ? '+-' : lastResult[14]}</Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid item xs={12} sm={6}>
                    <Paper className={styles.titlepaper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={styles.titlepaper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
      </Grid>
    </div>
  );
}

export default CreatePlan;