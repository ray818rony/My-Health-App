import React, { useState } from 'react';
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import { UserForm } from '../Prefrences/MarvelForm';
import { set } from 'react-hook-form';
import { isClassExpression } from 'typescript';
import { Calendar } from '../../components';
// import DataTable from 
// import { DataTable } from '../DataTable/DataTable';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        menuText: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary content below the app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0,
        },
        toolbar: {
            display: 'flex',
        },
        toolbar_button: {
            marginLeft: 'auto'
        }
    }),
);


interface DashProps {
    history: RouteComponentProps['history'];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match']
}


export const Dashboard = withRouter((props: DashProps) => {
    console.log(props)
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

// Handle Dialog Open/Close
const handleDialogClickOpen = () => {
    setDialogOpen(true);
  }

  const handleDialogClickClose = () => {
    setDialogOpen(false);
  }


<Button href="./" className={classes.toolbar_button} onClick={handleDialogClickOpen}>back</Button>

{/*Dialog Pop Up begin */}
<Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
<DialogTitle id="form-dialog-title">Add New Hero</DialogTitle>
<DialogContent>
  <DialogContentText>Add A New Hero</DialogContentText>
    <UserForm />
</DialogContent>
<DialogActions>
  <Button onClick = {handleDialogClickClose} color="primary">Cancel</Button>
  <Button onClick={handleDialogClickClose} color = "primary">Done</Button> 
</DialogActions>

</Dialog>
    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'View',
            onClick: () => history.push('/View')
        },
        {
            text: 'Calendar',
            onclick: () => history.push('/dashboard')
        },
        {
            text: 'Sign Up',
            onclick: () => history.push('/signin')
        },
        {
            text: 'Log Out',
            onclick: () => history.push('/signin')
        },

    ]


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap>
                        Calendar
                    </Typography>
                    <Button href="./" className={classes.toolbar_button}>Back</Button>
                </Toolbar>
            </AppBar>
            <MUIDrawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {itemsList.map((item, index) => {
                        const { text, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick} >
                                <ListItemText className={classes.menuText} primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <h1>You can start by:</h1>
                <h2>selecting one day, or a range of days</h2>

                <Calendar />
                <br>
                
                </br>
                <DialogActions className="calaccept">
                  <Button onClick = {handleDialogClickClose} color="primary">Cancel</Button>
                  <Button onClick={handleDialogClickClose} color = "primary">Done</Button> 
                </DialogActions> 
            </main>
            
        </div>
    )
    
} );

