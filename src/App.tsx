import React from 'react';
import './App.css';
import Kakeibo from './View/Body/Kakeibo/Component/main';
import Home from './View/Body/Home/Component/main';
import Header from './View/Header/Component/main';
import KakeiboProvider from './View/Body/Kakeibo/Container/Kakeibo/Provider/provider';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
      minHeight: '100vh'
    },
    bodyroot: {
      height: 'calc(100vh-120px)',
      width: '100%'
    }
  })
);

const App: React.FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Router>
        <Header />
        <Box className={styles.bodyroot}>
          <Switch>
            <Route path={['/', '/kakeibo']} exact component={Kakeibo} />
            <Route path={['/home']} exact component={Home} />
          </Switch>
        </Box>
      </Router>
    </Box>
  );
};

export default App;
