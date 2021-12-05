import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container:{
        background : "rosybrown",
        display: "flex",
        justifyContent : "space between"
    },
    leftSide:{
        color: 'white',
        fontSize: '30px',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        padding : "15px"
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "50%"
      
    },
    cates:{
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase',
        letterSpacing: '5px',
        padding: "15px"
    },
    rightSide: {
        flex: 1,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    log:{
        color: 'white',
        textTransform: 'uppercase',
        marginLeft: '15px',
        cursor: 'pointer',
        letterSpacing: '2px',
        fontWeight: 500,
    },
    alertRegiser:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '400px',
        minHeight: '870px !important',
        backgroundColor: 'black',
        color: 'white',
        overflowY: 'hidden',
        paddingTop: '5px',
    },
    alert:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '400px',
        minHeight: '300px !important',
        backgroundColor: 'black',
        color: 'white',
        overflowY: 'hidden',
        paddingTop: '5px',
    },
    title:{
        fontSize: '35px',
        fontWeight: 500,
        marginTop: '-30px',
        textTransform: 'uppercase',
        letterSpacing: '5px',
        marginBottom: '20px',

    },
    inputGroup:{
        margin: '10px',
        fontSize: '20px',
        letterSpacing: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn:{
        marginTop: '20px',
        color: 'black',
        backgroundColor: 'white !important',
        padding: '10px 25px',
    },
    input:{
        padding: '10px',
    },
    inputContainer:{
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    boxNavbar:{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    }
}));