import {Box, Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles( {
    errorBox: {
        display: 'flex',
        flexDirection: "column",
        textAlign: 'center',
        height: '70vh',
        justifyContent: "center",
    }
});

const Error404 = () => {

    const classes = useStyles();

    return <>
        <Container
        >
            <Box className={classes.errorBox}>
                <h1>Oops! Page not found</h1>
                <h1><span>4</span><span>0</span><span>4</span></h1>
            </Box>
        </Container>
    </>
        ;
};

export default Error404;
