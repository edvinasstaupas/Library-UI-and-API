import {
    AppBar,
    Button,
    Link,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../state/User/UserModel';
import { logout } from '../../state/User/UserActions';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginBottom: 20
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

    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const onClickLogOut = () => {
        dispatch(logout());
        history.push('/');
    };

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
                            to="/Search"
                            className={classes.link}
                            activeClassName={classes.active}
                            component={NavLink}
                        >
                            Search
                        </Link>
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
                    </nav>
                    {state.loggedInUser != null ? (
                        <>
                        {state.loggedInUser.roles.includes("ROLE_LIBRARIAN") ?
                            <Link
                                variant="button"
                                color="textPrimary"
                                to="/librarian"
                                className={classes.link}
                                activeClassName={classes.active}
                                component={NavLink}
                            >
                                Librarian page
                            </Link> : <p></p>}
                            <Link
                                variant="button"
                                color="textPrimary"
                                to="/user/copies"
                                className={classes.link}
                                activeClassName={classes.active}
                                component={NavLink}
                            >
                                My copies
                            </Link>
                            <p>{state.loggedInUser.fullUserName}</p>
                            <Button
                                onClick={onClickLogOut}
                                color="primary"
                                variant="outlined"
                                className={classes.link}
                            >
                                Log out
                            </Button>
                        </>
                    ) : (
                        <Button
                            to="/login"
                            color="primary"
                            variant="outlined"
                            className={classes.link}
                            component={NavLink}
                        >
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
