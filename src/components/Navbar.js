import React,{useState} from 'react'
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,
//Button
} from '@material-ui/core';

import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

import avatar from '../avatar.png';
import {makeStyles} from '@material-ui/core/styles';

//Css style
const useStyles = makeStyles(theme => ({
    menuSliderContainer:{
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "white"
    }
})); 

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts'
    }
]

const Navbar = () => {

    const [state, setstate] = useState({
        left: false
    });

    const toggleSlider = (slider, open) => () =>{
        setstate({...state,[slider]: open})
    };

    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div"  onClick={(toggleSlider(slider,false))}>
            <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe"/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}> {lsItem.listIcon}</ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText} />
                </ListItem>
                ))};
            </List>
        </Box>
    )
    
    return (
        <>
        <Box component="nav">
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={toggleSlider("left",true)} color="inherit" aria-label="menu">
                    <Menu />
                    </IconButton>
                    <Typography variant="h5" style={{color: 'inherit'}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider  open={state.left}
                        onClose={toggleSlider("left", false)}>
                        {sideList("left")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
};

export default Navbar;
