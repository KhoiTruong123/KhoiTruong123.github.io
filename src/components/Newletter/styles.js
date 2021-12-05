import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container:{
        background: "#E0ECF8",
        maxWidth: '100%',
        overflow: 'hidden',
        margin: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header:{
        fontSize: '70px',
        textTransform: 'uppercase',
        fontWeight: 700,
        letterSpacing: '5px',
    },
    content: {
        paddingTop: "2%",
        width: "70%",
        color : "black",
        fontSize: "30px",
        textAlign: "center",
    },
    sentence : {
        fontSize: "20px",
        padding:"3%"
    },
    inputForm:{
        width: '100%',
        textAlign:"center",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: "5%"
    },
    input:{
        flex: 4,
        height: '40px',
        fontSize: '15px',
        border: '1px solid #CEE5D0',
        width : "30%",
        textAlign: 'center',
        '&:focus': {
            outline: 'none',
        }
    },
    button:{
        flex: 1,
        backgroundColor: 'red',
        color: 'black',
        height: '39px',
    }
    
}));