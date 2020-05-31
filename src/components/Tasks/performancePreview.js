import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Skeleton } from '@material-ui/lab';

const styles = {
    root: {
        margin: '50px auto',
        textAlign: 'center',
    },

    icon_box_task: {
        position: 'absolute',
        margin: '-40px 0',
        zIndex: +1,
        height: '60px',
        width: '60px',
        border: 0,
        boxShadow: '4px 4px 8px rgba(111, 111, 255, 0.1)',
    },
    icon_box_points: {
        position: 'absolute',
        margin: '-40px 0',
        zIndex: +1,
        height: '60px',
        width: '60px',
        border: 0,
        boxShadow: '4px 4px 8px rgba(111, 111, 255, 0.1)',
    },
    icon_box_leaderBoard: {
        position: 'absolute',
        margin: '-40px 0',
        zIndex: +1,
        height: '60px',
        width: '60px',
        border: 0,
        boxShadow: '4px 4px 8px rgba(111, 111, 255, 0.1)',
    },
    card_tasks: {
        border: 0,
        borderRadius: 5,
        boxShadow: '4px 4px 8px rgba(111, 111, 255, 0.1)',
        color: 'black',
        height: '100px',
        width: '200px',
        padding: 10,
    },

    card_points: {
        border: 0,
        borderRadius: 5,
        boxShadow: '4px 4px 8px rgba(111, 111, 255, 0.1)',
        color: 'black',
        height: '100px',
        width: '200px',
        textAlign: 'center',
        padding: 10,
    },

    card_leaderBoard: {
        border: 0,
        borderRadius: 5,
        boxShadow: '4px 4px 8px rgba(111, 111, 255, 0.1)',
        color: 'black',
        height: '100px',
        width: '200px',
        padding: 10,
    },
};

const performancePreview = ({
    stateData: { tasks, points, leaderBoard, error, loading },
    classes,
}) => {
    return (
        <div>
            <Typography align='center' variant='h5'>
                Performance
            </Typography>
            <Grid
                container
                spacing={5}
                direction='row'
                justify='center'
                alignItems='center'
                className={classes.root}>
                <Grid item>
                    {!loading ? (
                        <Card className={classes.card_tasks}>
                            <div
                                className={classes.icon_box_task}
                                style={{
                                    'background-color': 'rgb(58, 127, 240)',
                                }}>
                                <AssignmentIcon
                                    style={{
                                        margin: '20px auto',
                                        color: 'white',
                                        fontSize: 20,
                                    }}
                                />
                            </div>
                            <div className={classes.content}>
                                <div>
                                    <Typography align='right' variant='h5'>
                                        Tasks
                                    </Typography>
                                    <Typography align='right' variant='h4'>
                                        {tasks}
                                    </Typography>
                                </div>
                                <Divider light style={{ margin: '2px' }} />
                                <div>
                                    <Typography align='left' variant='h6'>
                                        Total Tasks: 48
                                    </Typography>
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <Skeleton variant='rect' width={200} height={100} />
                    )}
                </Grid>
                <Grid item>
                    {!loading ? (
                        <Card className={classes.card_points}>
                            <div
                                className={classes.icon_box_points}
                                style={{
                                    'background-color': 'rgb(232, 51, 54)',
                                }}>
                                <EqualizerIcon
                                    style={{
                                        margin: '20px auto',
                                        color: 'white',
                                        fontSize: 20,
                                    }}
                                />
                            </div>
                            <div className={classes.content}>
                                <div>
                                    {' '}
                                    <Typography align='right' variant='h6'>
                                        Points
                                    </Typography>
                                    <Typography align='right' variant='h4'>
                                        {points}
                                    </Typography>
                                </div>
                                <Divider light style={{ margin: '2px' }} />
                                <div>
                                    <Typography align='left' variant='h6'>
                                        Max points: 48
                                    </Typography>
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <Skeleton variant='rect' width={200} height={100} />
                    )}
                </Grid>
                <Grid item>
                    {!loading ? (
                        <Card className={classes.card_leaderBoard}>
                            <div
                                className={classes.icon_box_leaderBoard}
                                style={{
                                    'background-color': 'rgb(46, 232, 121)',
                                }}>
                                <GroupIcon
                                    style={{
                                        margin: '20px auto',
                                        color: 'white',
                                        fontSize: 20,
                                    }}
                                />
                            </div>
                            <div className={classes.content}>
                                <div>
                                    <Typography align='right' variant='h6'>
                                        LeaderBoard
                                    </Typography>
                                    <Typography align='right' variant='h4'>
                                        {leaderBoard}
                                    </Typography>
                                </div>
                                <Divider light style={{ margin: '2px' }} />
                                <div>
                                    <Typography align='left' variant='h6'>
                                        Season: Summer
                                    </Typography>
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <Skeleton variant='rect' width={200} height={100} />
                    )}
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
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(performancePreview);
