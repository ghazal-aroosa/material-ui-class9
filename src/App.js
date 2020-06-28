import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import { Button , Icon, makeStyles, Grid,IconButton, AppBar,Toolbar,Typography } from '@material-ui/core'; // copy from its website
import MenuIcon from '@material-ui/icons/Menu';

// copy css code from its website just paste here for button icon alse botton send code copy and paste in app function.
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
     <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
