import { Box, Container, makeStyles } from '@material-ui/core';
import {useHistory} from "react-router-dom";
import {PrimaryOutlinedButton} from "../StyledItems";

const useStyles = makeStyles({
    errorBox: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '70vh',
        justifyContent: 'center',
    },
});

const Error404 = () => {
    const classes = useStyles();

    const history = useHistory();

    return (
        <>
            <Container>
                <Box className={classes.errorBox}>
                    <h1>Oops! Page not found</h1>
                    <h1>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h1>
                    <PrimaryOutlinedButton onClick={() => {
                        history.goBack()
                    }}>
                        Go back
                    </PrimaryOutlinedButton>
                </Box>
            </Container>
        </>
    );
};

export default Error404;
