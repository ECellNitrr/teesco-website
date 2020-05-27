import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';

const classes = {
    card_style: {
        margin: '10px 0px',
        textAlign: 'center',
        width: '500px',
        fontSize: '20px',
    },
};

const GroupRole = ({ stateData: { loading, role } }) => {
    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            <Grid item>
                <div style={classes.card_style}>
                    <h2>Role</h2>
                    {loading ? (
                        <Fragment>
                            <Skeleton variant='text' animation='wave' />
                            <Skeleton variant='text' animation='wave' />
                            <Skeleton variant='text' animation='wave' />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <p>{role}</p>
                        </Fragment>
                    )}
                </div>
            </Grid>
        </Grid>
    );
};

GroupRole.propTypes = {
    stateData: PropTypes.shape({
        role: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
    }),
};

export default GroupRole;
