import React, { Component, Fragment } from 'react';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { Facebook, Share, CloudUpload, WhatsApp, Instagram, Twitter } from '@material-ui/icons';
import { Skeleton } from "@material-ui/lab";

const classes={
    taskComponentWrap:{
        margin:"10px 0px",
        height:"45px"
    },
    taskSkeleton:{ 
        height:"70px", 
        margin:"-7.5px 0px" 
    }
}

const LatestTasks=({
    stateData:{ tasks, loading }
}) =>{

    var taskComponent=(props)=>(
        <Paper style={ classes.taskComponentWrap }>
            <Grid container direction="row" justify="flex-start" alignItems="stretch" style={{height:"100%"}} >
                <Grid container direction="row" xs={1} justify="center" alignItems="center">
                    <Typography variant="subtitle2">
                        { props.index }
                    </Typography>
                </Grid>

                <Grid container direction="row" xs={1} justify="center" alignItems="center">
                    <div style={{ textAlign:"center" }}>
                        { props.icon }
                    </div>
                </Grid>

                <Grid container direction="row" xs={6} justify="flex-start" alignItems="center" >
                    <Typography variant="caption" >
                        { props.title }
                    </Typography>
                </Grid>

                <Grid container direction="row" xs={4} justify="space-evenly" alignItems="center">
                    <Grid item >
                        <Button variant="contained" size="small" color="primary">
                            <Share style={{ fontSize:"15px" }}></Share> <span style={{ paddingLeft:"5px" }}>Share</span>
                        </Button>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" size="small" color="primary">
                            <CloudUpload style={{ fontSize:"15px" }}></CloudUpload> <span style={{ paddingLeft:"5px" }}>Upload</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );

    return (
        <div style={{ paddingLeft:"20%" ,width:"60%", minWidth:"600px"}}>
            <Fragment>
                <div style={{ padding:"0px 30px"}}>
                    <Typography variant="h6">
                        Latest Tasks
                    </Typography>
                </div>

                <Paper>
                    <div className={ classes.taskComponentWrap } style={{ backgroundColor:"rgb(220,221,225)" }}>
                        <Grid container direction="row" justify="flex-start" alignItems="center" >
                            <Grid item xs={1}>
                                <div style={{ padding:"7.5px 0px", textAlign:"center"}}>
                                    <Typography variant="subtitle2">
                                        #
                                    </Typography>
                                </div>
                            </Grid>

                            <Grid item xs={7}>
                                <div style={{ textAlign: "center"}}>
                                    <Typography variant="subtitle2">
                                        Tasks
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div style={{ textAlign: "center"}}>
                                    <Typography variant="subtitle2">
                                    
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>    

                { ( loading ) ? 
                    <Grid container direction="column" align-item="stretch">
                        <Skeleton style={ classes.taskSkeleton }></Skeleton>
                        <Skeleton style={ classes.taskSkeleton }></Skeleton>
                        <Skeleton style={ classes.taskSkeleton }></Skeleton>
                        <Skeleton style={ classes.taskSkeleton }></Skeleton>
                        <Skeleton style={ classes.taskSkeleton }></Skeleton>
                        <Skeleton style={ classes.taskSkeleton }></Skeleton>
                    </Grid> :
                    tasks.map((task, index)=>{
                        var icon;
                        switch(task.site){
                            case "facebook": icon=<Facebook style={{ fontSize:"27.5px", paddingTop:"5px" }}></Facebook>;
                                break;
                            case "whatsapp": icon=<WhatsApp style={{ fontSize:"27.5px", paddingTop:"5px" }}></WhatsApp>;
                                break;
                            case "instagram": icon=<Instagram style={{ fontSize:"27.5px", paddingTop:"5px" }} ></Instagram>;
                                break;
                            case "twitter": icon=<Twitter></Twitter>;
                                break;
                            case "medium": icon=<Typography style={{ fontFamily:"Noto Serif JP", fontSize:"20px", fontWeight:"700" }}>M</Typography>
                                break;
                            default : icon="";
                        }
                        var taskComp=taskComponent({
                            index:index+1,
                            title:task.title,
                            icon:icon                        
                        });

                        return taskComp;
                    })
                }
                
            </Fragment>
        </div>
    
    );
}

export default LatestTasks;