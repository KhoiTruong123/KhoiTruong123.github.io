import React from 'react'
import { useStyles } from './styles';
import {Box} from '@material-ui/core';
import { Facebook, Instagram, MailOutlineOutlined, Phone, Pinterest, Room, Style, Twitter } from "@material-ui/icons";
import {Link} from 'react-router-dom';
export default function Footer() {
    const classes= useStyles();
    
    return (
        <Box className={classes.container}>
            <Box className={classes.left}>
            <p className={classes.title}>About us</p>
            <p className={classes.words}>Our company</p>
            <p className={classes.words}>Our history</p>
            <p className={classes.words}>Contact</p>
            <p className={classes.words}>Jobs</p>
            <p className={classes.words}>Journal</p>
            <p className={classes.words}>Store Locations</p>
            </Box>
            <Box className={classes.center}>
            <p className={classes.title}>How can we help</p>
            <p className={classes.words}>FAQs</p>
            <p className={classes.words}>Order tracking</p>
            <p className={classes.words}>Terms & Conditions</p>
            <p className={classes.words}>Jobs</p>
            <p className={classes.words}>Returns & Refunds</p>
            <p className={classes.words}>Support</p>
            </Box>
            <Box className={classes.center}>
            <p className={classes.title}>Shop</p>
            <p className={classes.words}>Bag</p>
            <p className={classes.words}>Rings</p>
            <p className={classes.words}>T-shirts</p>
            <p className={classes.words}>Jackets</p>
            <p className={classes.words}>Electronics</p>
            </Box>
            <Box className={classes.right}>
            <p className={classes.title}>Our infomation</p>
            <p className={classes.words}>12/35 Vo Van Ngan, Thu Duc, HCM</p>
            <p className={classes.words}>0992840021</p>
            <p className={classes.words}>khoitruong@gmail.com</p>
            </Box>
    </Box>
    )
}
