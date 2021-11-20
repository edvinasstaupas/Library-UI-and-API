import {
    AppBar,
    Button,
    Link,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    active: {
        fontWeight: 'bolder',
        color: 'blue',
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                        to="/"
                        component={NavLink}
                    >
                        Your internet library
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="textPrimary"
                            to="/newBooks"
                            className={classes.link}
                            activeClassName={classes.active}
                            component={NavLink}
                        >
                            New books
                        </Link>
                        <Link
                            variant="button"
                            color="textPrimary"
                            to="/user/copies"
                            className={classes.link}
                            activeClassName={classes.active}
                            component={NavLink}
                        >
                            Copies
                        </Link>
                    </nav>
                    <Button
                        href="/login"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;