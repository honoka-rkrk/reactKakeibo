import React, { useState, useEffect, useCallback, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
    titlepaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.title.font,
      backgroundColor: theme.palette.title.main
    },
    planpaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.detail.font,
      backgroundColor: theme.palette.detail.main
    },
    inputstyle: {
      textAlign: 'center'
    }
  })
);

type DetailProps = {
  plan: Array<number>;
  result: Array<number>;
  lastResult: Array<number>;
  calcFlg: boolean;
  PlanChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: number
  ) => void;
  ResultChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: number
  ) => void;
  createParam: (idx: number) => string;
  itemLength: number;
};

const Detail: React.FC<DetailProps> = (props: DetailProps) => {
  const styles = useStyles();
  const {
    plan,
    result,
    lastResult,
    calcFlg,
    PlanChange,
    ResultChange,
    createParam,
    itemLength
  } = props;

  return (
    <>
      {[...Array(itemLength)].map((_, idx) => (
        <>
          <Paper key={`itemName_${idx}`} className={styles.planpaper}>
            {createParam(idx)}
          </Paper>
          <FormControl>
            <Input
              key={`plan_${idx}`}
              id={`plan_${idx}`}
              value={plan[idx]}
              onChange={(e) => PlanChange(e, idx)}
            />
          </FormControl>
          <FormControl>
            <Input
              key={`result_${idx}`}
              id={`result_${idx}`}
              value={result[idx]}
              onChange={(e) => ResultChange(e, idx)}
            />
          </FormControl>
          <Paper key={`last_${idx}`} className={styles.planpaper}>
            {lastResult[idx] === null ? '+-' : '+-: ' + lastResult[idx]}
          </Paper>
        </>
      ))}
    </>
  );
};

export default Detail;
