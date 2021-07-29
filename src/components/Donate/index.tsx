import React,{ Component} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles2 = makeStyles({
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),;`,
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

export class Donate extends Component{
    render() {
        return (
            <div>
            <link rel="stylesheet" href="./donate.css"/>
            
            <main>
                <div className="donate">
                    <p className='main_text'>Donate</p>
                    <p>The whole Idea behind this simple project, Is to connect <br />
                        care givers, Weather it's nurses or nurse assistants, with care takers,<br />
                        or anyone in need of extra help. <br />
                        we All can make a change. <br />   
                        Please consider supporting me in making this idea becoming a real project 
                    </p>
                    <br />
                    <br />
                    <br />
                    

                    <a className="butn" href="./signin" target='_blank' ><Button color="primary" variant="contained">Make a Change!</Button></a>

                </div>
                
            </main>
            </div>

        );
    }
}
function useStyles() {
    throw new Error('Function not implemented.');
}
