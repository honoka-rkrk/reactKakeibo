import React,{useState,useEffect,useCallback,useRef} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    total:{
        gap:'4px',
        padding:theme.spacing(2),
        display:'grid',
        gridColumn:'1',
        gridRow:'2',
        gridTemplateColumns:'19% 27% 27% 27%'
    },
    detailCommon:{
        display:'grid',
        gap:'4px',
        padding:theme.spacing(2),
        gridColumn:'1',
        gridRow:'3',
        gridTemplateRows:'repeat(100%/15)',
        gridTemplateColumns:'19% 27% 27% 27%'
    },
    titlepaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.title.font,
      backgroundColor:theme.palette.title.main
    },
    planpaper:{
        padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.detail.font,
      backgroundColor:theme.palette.detail.main
    },
    inputstyle:{
        textAlign:'center'
    }
  }),
);

type DetailProps={
    plan: Array<number>;
    result:Array<number>;
    lastResult:Array<number>;
    calcFlg:boolean
    PlanChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: number) => void
    ResultChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: number) => void
}


const Detail:React.FC<DetailProps> = (props:DetailProps) =>  {
  const styles = useStyles();
  const {plan,result,lastResult,calcFlg,PlanChange,ResultChange} = props;

  return (
    <>
    <Paper className={styles.planpaper}>家賃</Paper>
        <FormControl>
            <Input key='plan0' id="component-simple" value={plan[0]} onChange={(e) =>PlanChange(e,0)} />
        </FormControl>
        <FormControl>
            <Input key='result0' id="component-simple" value={result[0]} onChange={(e) =>ResultChange(e,0)} />
        </FormControl>
        <Paper className={styles.planpaper}>{lastResult[0] === null ? '+-' : ('+-: ' + lastResult[0])}</Paper>
        <Paper className={styles.planpaper}>奨学金</Paper>
        <FormControl>
            <Input key='plan1' id="component-simple" value={plan[1]} onChange={(e) =>PlanChange(e,1)} />
        </FormControl>
        <FormControl>
            <Input key='result1' id="component-simple" value={result[1]} onChange={(e) =>ResultChange(e,1)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[1]}</Paper>
        <Paper className={styles.planpaper}>ガス</Paper>
        <FormControl>
            <Input key='plan2' id="component-simple" value={plan[2]} onChange={(e) =>PlanChange(e,2)} />
        </FormControl>
        <FormControl>
            <Input key='result2' id="component-simple" value={result[2]} onChange={(e) =>ResultChange(e,2)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[2]}</Paper>
        <Paper className={styles.planpaper}>水道</Paper>
        <FormControl>
            <Input key='plan3' id="component-simple" value={plan[3]} onChange={(e) =>PlanChange(e,3)} />
        </FormControl>
        <FormControl>
            <Input key='result3' id="component-simple" value={result[3]} onChange={(e) =>ResultChange(e,3)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[3]}</Paper>
        <Paper className={styles.planpaper}>電気</Paper>
        <FormControl>
            <Input key='plan4' id="component-simple" value={plan[4]} onChange={(e) =>PlanChange(e,4)} />
        </FormControl>
        <FormControl>
            <Input key='result4' id="component-simple" value={result[4]} onChange={(e) =>ResultChange(e,4)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[4]}</Paper>
        <Paper className={styles.planpaper}>21日</Paper>
        <FormControl>
            <Input key='plan5' id="component-simple" value={plan[5]} onChange={(e) =>PlanChange(e,5)} />
        </FormControl>
        <FormControl>
            <Input key='result5' id="component-simple" value={result[5]} onChange={(e) =>ResultChange(e,5)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[5]}</Paper>
        <Paper className={styles.planpaper}>交際費</Paper>
        <FormControl>
            <Input key='plan6' id="component-simple" value={plan[6]} onChange={(e) =>PlanChange(e,6)} />
        </FormControl>
        <FormControl>
            <Input key='result6' id="component-simple" value={result[6]} onChange={(e) =>ResultChange(e,6)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[6]}</Paper>
        <Paper className={styles.planpaper}>食費</Paper>
        <FormControl>
            <Input key='plan7' id="component-simple" value={plan[7]} onChange={(e) =>PlanChange(e,7)} />
        </FormControl>
        <FormControl>
            <Input key='Result7'  id="component-simple" value={result[7]} onChange={(e) =>ResultChange(e,7)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[7]}</Paper>
        <Paper className={styles.planpaper}>日用品</Paper>
        <FormControl>
            <Input key='plan8' id="component-simple" value={plan[8]} onChange={(e) =>PlanChange(e,8)} />
        </FormControl>
        <FormControl>
            <Input key='result8' id="component-simple" value={result[8]} onChange={(e) =>ResultChange(e,8)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[8]}</Paper>
        <Paper className={styles.planpaper}>美容室</Paper>
        <FormControl>
            <Input key='plan9' id="component-simple" value={plan[9]} onChange={(e) =>PlanChange(e,9)} />
        </FormControl>
        <FormControl>
            <Input key='result9' id="component-simple" value={result[9]} onChange={(e) =>ResultChange(e,9)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[9]}</Paper>
        <Paper className={styles.planpaper}>携帯</Paper>
        <FormControl>
            <Input key='plan10' id="component-simple" value={plan[10]} onChange={(e) =>PlanChange(e,10)} />
        </FormControl>
        <FormControl>
            <Input key='result10' id="component-simple" value={result[10]} onChange={(e) =>ResultChange(e,10)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[10]}</Paper>
        <Paper className={styles.planpaper}>貯金</Paper>
        <FormControl>
            <Input key='plan11' id="component-simple" value={plan[11]} onChange={(e) =>PlanChange(e,11)} />
        </FormControl>
        <FormControl>
            <Input key='result11' id="component-simple" value={result[11]} onChange={(e) =>ResultChange(e,11)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[12]}</Paper>
        <Paper className={styles.planpaper}>プレゼント貯金</Paper>
        <FormControl>
            <Input key='plan12' id="component-simple" value={plan[12]} onChange={(e) =>PlanChange(e,12)} />
        </FormControl>
        <FormControl>
            <Input key='result12' id="component-simple" value={result[12]} onChange={(e) =>ResultChange(e,12)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[12]}</Paper>
        <Paper className={styles.planpaper}>クレジット</Paper>
        <FormControl>
            <Input key='plan13' id="component-simple" value={plan[13]} onChange={(e) =>PlanChange(e,13)} />
        </FormControl>
        <FormControl>
            <Input key='result13' id="component-simple" value={result[13]} onChange={(e) =>ResultChange(e,13)} />
        </FormControl>
        <Paper className={styles.planpaper}>{calcFlg === false ? '+-' : lastResult[13]}</Paper>
        <Paper className={styles.planpaper}>予備</Paper>
        <FormControl>
            <Input key='plan14' id="component-simple" value={plan[14]} onChange={(e) =>PlanChange(e,14)} />
        </FormControl>
        <FormControl>
            <Input key='result14' id="component-simple" value={result[14]} onChange={(e) =>ResultChange(e,14)} />
        </FormControl>
        <Paper className={styles.planpaper} >{calcFlg === false ? '+-' : lastResult[14]}</Paper>
    </>
  );
}

export default Detail;