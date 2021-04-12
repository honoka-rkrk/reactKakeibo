import React from 'react';
import Button from '@material-ui/core/Button';

type CalcProps = {
    calcClick: () => void;
}

const Calc:React.FC<CalcProps> = (props:CalcProps) => {
    const {calcClick =() => undefined} = props;

    return <Button variant="outlined" color="secondary" onClick={calcClick}>計算</Button>
}

export default Calc;