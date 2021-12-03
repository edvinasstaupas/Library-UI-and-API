import { Button, TableCell, TableRow, withStyles } from '@material-ui/core';

const PrimaryButton = withStyles((theme) => ({
    root: {
        backgroundColor: '#4a4a4a',
        '&:hover': {
            backgroundColor: '#333333',
        },
        color: '#ffffff',
        padding: theme.spacing(1, 2.2),
    },
}))(Button);

const PrimaryOutlinedButton = withStyles((theme) => ({
    root: {
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: '#ffffff',
        },
        color: '#000000',
        border: '1px solid black',
        padding: theme.spacing(0.75, 2),
    },
}))(Button);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#333333',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export {
    PrimaryButton,
    PrimaryOutlinedButton,
    StyledTableCell,
    StyledTableRow,
};
