import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core';

const classes = {
    styles: {
        margin: '50px auto',
        textAlign: 'center',
        borderRadius: '5px',
    },
    card_style: {
        width: '100px',
        height: '100px',
        padding: '10px',
    },
    circle: {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
    },
};

const performancePreview = (props) => {
    return (
        <div style={classes.styles}>
            <Grid
                container
                spacing={10}
                direction='row'
                justify='center'
                alignItems='center'>
                <Grid item>
                    <Card style={classes.card_style}>
                        <div style={classes.circle}></div>
                        Element
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={classes.card_style}>Element</Card>
                </Grid>
                <Grid item>
                    <Card style={classes.card_style}>Element</Card>
                </Grid>
            </Grid>
        </div>
    );
};

performancePreview.propTypes = {
    stateData: PropTypes.shape({
        tasks: PropTypes.number.isRequired,
        points: PropTypes.number.isRequired,
        leaderBoard: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
    }),
};

export default performancePreview;
