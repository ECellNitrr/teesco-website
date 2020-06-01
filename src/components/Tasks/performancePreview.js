import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, Divider, Box } from '@material-ui/core';

//Loading and alerts
import { Skeleton } from '@material-ui/lab';
import { Alert, AlertTitle } from '@material-ui/lab';

//Icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const styles = {
    root: {
        margin: '50px auto',
        textAlign: 'center',
    },

    icon_box: {
        position: 'absolute',
        margin: '-40px 0',
        zIndex: +1,
        height: '60px',
        width: '60px',
        border: 0,
        borderRadius: '5px 5px 5px 5px',
    },

    cards: {
        border: 0,
        borderRadius: 5,
        color: 'black',
        height: '100px',
        width: '200px',
        padding: 10,
    },
    icons: {
        margin: '20px auto',
        color: 'white',
        fontSize: 20,
    },
    alert: {
        width: '80%',
        margin: '20px auto',
    },
};

const performancePreview = ({
    stateData: {
        tasksCompleted,
        totalTasks,
        points,
        totalPoints,
        rank,
        totalVolunteers,
        error,
        loading,
    },
    classes,
}) => {
    //If an error occurs and the page is not yet loading
    if (error && !loading) {
        return (
            <Box className={classes.alert}>
                <Grid
                    container
                    spacing={1}
                    direction='coloumn'
                    justify='center'
                    alignItems='center'
                    className={classes.root}>
                    <Grid item>
                        <SentimentVeryDissatisfiedIcon
                            color='secondary'
                            style={{ fontSize: 100 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography align='center' variant='h6'>
                            <Box>
                                Something Went Wrong{' '}
                                <strong>Please try again later</strong>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        );
    }
    //Else return the normal state accordingly
    return (
        <div>
            <Typography align='center' variant='h5'>
                Performance
            </Typography>

            {!loading ? (
                <Grid
                    container
                    spacing={5}
                    direction='row'
                    justify='center'
                    alignItems='center'
                    className={classes.root}>
                    <Grid item>
                        {/* Tasks */}
                        <Card className={classes.cards} boxShadow={1}>
                            <Box
                                className={classes.icon_box}
                                bgcolor='success.main'
                                alignItems='center'
                                boxShadow={1}>
                                <AssignmentIcon className={classes.icons} />
                            </Box>

                            <Typography align='right' variant='h6'>
                                <strong>Tasks</strong>
                            </Typography>
                            <Typography align='right' variant='h4'>
                                {tasksCompleted}
                            </Typography>

                            <Divider light />

                            <Typography align='left' variant='body1'>
                                <Box p={1}>Total Tasks: {totalTasks}</Box>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item>
                        {/* Points */}
                        <Card className={classes.cards} boxShadow={1}>
                            <Box
                                className={classes.icon_box}
                                bgcolor='secondary.main'
                                boxShadow={1}>
                                <EqualizerIcon className={classes.icons} />
                            </Box>

                            <Typography align='right' variant='h6'>
                                <strong>Points</strong>
                            </Typography>
                            <Typography align='right' variant='h4'>
                                {points}
                            </Typography>

                            <Divider light />

                            <Typography align='left' variant='body1'>
                                <Box p={1}>Max points: {totalPoints}</Box>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item>
                        {/* Leader Board */}
                        <Card className={classes.cards} boxShadow={1}>
                            <Box
                                className={classes.icon_box}
                                bgcolor='info.main'
                                boxShadow={1}>
                                <GroupIcon className={classes.icons} />
                            </Box>

                            <Typography align='right' variant='h6'>
                                <strong>Rank</strong>
                            </Typography>
                            <Typography align='right' variant='h4'>
                                {rank}
                            </Typography>

                            <Divider light />

                            <Typography align='left' variant='body1'>
                                <Box p={1}>
                                    Total Volunteers: {totalVolunteers}
                                </Box>
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                //Loading State
                <Grid
                    container
                    spacing={5}
                    direction='row'
                    justify='center'
                    alignItems='center'
                    className={classes.root}>
                    <Grid item>
                        <Skeleton variant='rect' width={200} height={100} />
                    </Grid>
                    <Grid item>
                        <Skeleton variant='rect' width={200} height={100} />
                    </Grid>
                    <Grid item>
                        <Skeleton variant='rect' width={200} height={100} />
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

performancePreview.propTypes = {
    stateData: PropTypes.shape({
        tasksCompleted: PropTypes.number.isRequired,
        totalTasks: PropTypes.number.isRequired,
        points: PropTypes.number.isRequired,
        totalPoints: PropTypes.number.isRequired,
        rank: PropTypes.number.isRequired,
        totalVolunteers: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
    }),
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(performancePreview);
