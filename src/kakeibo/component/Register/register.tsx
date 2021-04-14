import React from 'react';
import Button from '@material-ui/core/Button';

type RegisterProps = {
    registerClick: () => void;
}

const Register:React.FC<RegisterProps> = (props:RegisterProps) => {
    const {registerClick=() => undefined} = props;
    return(<Button variant="outlined" color="secondary" onClick={registerClick}>登録</Button>)
}

export default Register;