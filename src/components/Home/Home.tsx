import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import marvel_image from '../../assests/images/josh-appel-0nkFvdcM-X4-unsplash.jpg';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire'; // New Import
const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${marvel_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }

})

interface Props {
    title: string;
}


export const Home = (props: Props) => {

    // New classes variable code
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={`${classes.logo}`} >
                        <Link to='/' className={` ${classes.logo_a} ${classes.logo_navigation}`}>Change</Link>
                    </h1>
                    <ul className={` ${classes.navigation} ${classes.logo_navigation}`}>
                        
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Calender</Link>
                        </li>
                        <AuthCheck fallback={
                            <li>
                                <Link to="/View" className={classes.nav_a}>View</Link>
                            </li>
                        }>
                        
                        <li>
                            <Link to="/Calendar" className={classes.nav_a}>Calendar</Link>
                        </li>
                        <li>
                            <Link to="/View" className={classes.nav_a}>View</Link>
                        </li>
                        </AuthCheck>
                       
                        <li>
                            <Link to='/donate' className={classes.nav_a}>Donate</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Image Area */}
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <p>Start meeting the people that wil Change your life</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <a href="./signin" target='_blank' ><Button color="primary" variant="contained">Change!</Button></a>

                </div>

            </main>

        </div>
    )
}