import React from 'react'
import { useStyles } from './styles'
import { Box, Button } from '@material-ui/core';
import {Send} from '@material-ui/icons';
export default function Newletter() {
    const classes = useStyles();
    
    return (
        <Box className={classes.container}>
            <Box className={classes.content}> Our products have good matetial and believe in us. Try our products, we won't make you disapointed.</Box>
            <Box className={classes.inputForm}>
                <Box className={classes.sentence}>Leave your email here for taking any new products of us</Box>
                <input type="text" className={classes.input} placeholder="Your email address" />
                <Button className={classes.button} variant="contained"><Send/></Button>
            </Box>
        </Box>
    )
}
