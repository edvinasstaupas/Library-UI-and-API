import * as React from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
} from '@material-ui/core';
import { PrimaryButton } from '../StyledItems';
import 'react-day-picker/lib/style.css';
import { NavLink } from 'react-router-dom';

const Librarian = () => {
    return (
        <>
            <Container>
                <Box p={10}>
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    title="Check user copies"
                                    titleTypographyProps={{
                                        align: 'center',
                                    }}
                                    action={null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent></CardContent>
                                <CardActions>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <PrimaryButton
                                            component={NavLink}
                                            to="/librarian/copies"
                                        >
                                            Go
                                        </PrimaryButton>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    title="Add book"
                                    titleTypographyProps={{
                                        align: 'center',
                                    }}
                                    action={null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent></CardContent>
                                <CardActions>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <PrimaryButton
                                            component={NavLink}
                                            to="/librarian/addBook"
                                        >
                                            Go
                                        </PrimaryButton>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    title="Add copy"
                                    titleTypographyProps={{
                                        align: 'center',
                                    }}
                                    action={null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent></CardContent>
                                <CardActions>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <PrimaryButton
                                            component={NavLink}
                                            to="/librarian/addCopy"
                                        >
                                            Go
                                        </PrimaryButton>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Librarian;
