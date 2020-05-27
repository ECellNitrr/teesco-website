import React from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';

const classes = {
    card_style: {
        margin: '10px 0px',
        padding: '30px 30px',
        textAlign: 'center',
        width: '500px',
    },
};

const GroupRole = ({ stateData: { loading, role } }) => {
    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            {loading ? (
                <Grid item>
                    <div style={classes.card_style}>
                        <h3>Role</h3>
                        <Skeleton variant='text' animation='wave' />
                        <Skeleton variant='text' animation='wave' />
                        <Skeleton variant='text' animation='wave' />
                    </div>
                </Grid>
            ) : (
                <Grid item>
                    <div style={classes.card_style}>
                        <h3>Role</h3>
                        <p>{role}</p>
                    </div>
                </Grid>
            )}
        </Grid>
    );
};

GroupRole.propTypes = {
    stateData: PropTypes.object,
};

export default GroupRole;
