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
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Calc from '../../../Container/LeftComponent/Calc/calc';
import Register from '../../../Container/LeftComponent/Register/register';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titlepaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: theme.palette.dispDate.main,
      position: 'relative'
    },
    typographyCommon: {
      position: 'absolute',
      textAlign: 'center',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      color: theme.palette.dispDate.font
    }
  })
);

type TitleProps = {
  dispDate: string;
  minDate: Date;
  maxDate: Date;
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
  syunyu: Array<number>;
  KyuuyoChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: number
  ) => void;
};

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const styles = useStyles();
  const {
    dispDate,
    minDate,
    maxDate,
    selectedDate,
    handleDateChange,
    syunyu,
    KyuuyoChange
  } = props;

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Paper className={styles.titlepaper}>
          <Typography className={styles.typographyCommon}>{dispDate}</Typography>
        </Paper>
        <KeyboardDatePicker
          margin='normal'
          id='date-picker-dialog'
          label='年月選択'
          format='MM/yyyy'
          views={['year', 'month']}
          minDate={minDate}
          maxDate={maxDate}
          openTo='month'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
      </MuiPickersUtilsProvider>
      <Calc />
      <Register />
      <FormControl>
        <InputLabel htmlFor='component-simple'>給与</InputLabel>
        <Input
          id='component-simple'
          placeholder='0'
          value={syunyu === null ? null : syunyu[0]}
          onChange={(e) => KyuuyoChange(e, 0)}
          endAdornment={<InputAdornment position='end'>￥</InputAdornment>}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='component-simple'>その他収入</InputLabel>
        <Input
          id='component-simple'
          placeholder='0'
          value={syunyu === null ? null : syunyu[1]}
          onChange={(e) => KyuuyoChange(e, 1)}
        />
      </FormControl>
    </>
  );
};

export default Title;
