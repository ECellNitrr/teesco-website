import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@material-ui/core';
//Icon
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

/*Component requires
error => Error to be displayed(string)
width => Total width of the box in % (string)
direction => Direction of the grid {column, row} (string) */

const Error = ({ stateData: { error, width, direction, iconSize } }) => {
    return (
        <Box
            width={width}
            style={{
                margin: '20px auto',
            }}>
            <Grid
                container
                spacing={1}
                direction={direction}
                justify='center'
                alignItems='center'>
                <Grid item>
                    <SentimentVeryDissatisfiedIcon
                        color='secondary'
                        style={{ fontSize: iconSize }}
                    />
                </Grid>
                <Grid item>
                    <Typography align='center' variant='h6'>
                        <Box>{error}</Box>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

Error.propTypes = {
    stateData: PropTypes.shape({
        error: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        direction: PropTypes.string.isRequired,
        iconSize: PropTypes.number.isRequired,
    }),
};

Error.defaultProps = {
    stateData: {
        error: 'Something Went Wrong Please try again later or try refreshing',
        width: '80%',
        direction: 'column',
        iconSize: 20,
    },
};

export default Error;
