import React, { Fragment } from 'react';
import { Grid, Card, Button, TextareaAutosize, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';

const classes = {
    card_style: {
        margin: '10px auto',
        padding: '20px 20px',
        textAlign: 'center',
        width: '500px',
        fontSize: '18px',
    },
    text_area: {
        width: '450px',
    },
};

const GroupRole = ({ stateData: { loading, role, edit }, setEdit }) => {
    return (
        <Card style={classes.card_style}>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'>
                <Grid item style={{ width: '100%' }}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        p={1}
                        justifyContent='center'>
                        <Box flexGrow={1}>
                            <h2>Role</h2>
                        </Box>
                        <Box>
                            <Button
                                disabled={loading}
                                variant='contained'
                                color='primary'
                                onClick={() => setEdit(edit)}>
                                {edit ? 'Save' : 'Edit'}
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item style={{ width: '100%' }}>
                    {loading ? (
                        <Fragment>
                            <Skeleton
                                variant='text'
                                animation='wave'
                                style={{ width: '100%' }}
                            />
                            <Skeleton
                                variant='text'
                                animation='wave'
                                style={{ width: '100%' }}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            {edit ? (
                                <TextareaAutosize
                                    style={classes.text_area}
                                    defaultValue={role}
                                    rowsMin={4}
                                />
                            ) : (
                                <p>{role}</p>
                            )}
                        </Fragment>
                    )}
                </Grid>
            </Grid>
        </Card>
    );
};

//Prop types for checking the props passed. This would throw an error when no props are passed
GroupRole.propTypes = {
    stateData: PropTypes.shape({
        role: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        edit: PropTypes.bool.isRequired,
    }),
    setEdit: PropTypes.func.isRequired,
};

export default GroupRole;
