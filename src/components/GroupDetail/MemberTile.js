import React from 'react'
import {Grid,Paper,Typography,Divider,IconButton,Menu,MenuItem} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

//Widgets
import Err from '../Widgets/Error/Error'

//Icons
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import {makeStyles} from '@material-ui/core/styles'

const useStyles =makeStyles((theme)=>({
    root:{
        
    },
    paperGrid: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        maxWidth:600
    },
    paper:{
        padding:10,
        width:400
    },
    icons:{
       margin:"0 10px 0 20px",
       fontSize:25
    },
    index:{
        fontWeight:"bold",
        margin:"0 5px 0 8px"
    },
    div:{
        color:"#A9A9A9",
        margin:"0 10px"
    },
    info:{
       fontWeight:"bold"
    },
    more:{
       
    }
}))

function MemberTile({StateData:{
    loading,
    memberlist,
    permissions,
    error
}}) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //can access styles from Usestyles defined above
    const classes=useStyles()

    //Repeats the skeleton 6 times for loading state
    let loadingTile=Array(6).fill(null).map(tile=>{
        return(
            <Skeleton style={{marginBottom:"20px"}} variant="rect" height={60} width={400}  />
        )
    })

    //For indexing the members
    let i=0;

    //maping the member data in form of UI 
    let mapMembers=memberlist.map(member=>{
        i++;
        return(
            <Grid xs={12} className={classes.paperGrid} item>
                <Paper elevation="4" className={classes.paper}>  
                    <Grid container direction="row">
                        <Grid container alignItems="center" xs={10} item direction="row">
                            <Typography className={classes.index}>
                                {i}.
                            </Typography>
                            <Divider className={classes.div} variant="fullWidth" orientation="vertical" flexItem />
                            <Typography className={classes.icons}>
                                <IconButton><AccountBoxRoundedIcon color="secondary"/></IconButton>
                            </Typography>
                            <Typography className={classes.info}>
                            {member.fname}&nbsp;&nbsp;{member.lname}
                            </Typography>
                        </Grid>
                        <Grid container xs={2} justify="center" item direction="row">
                            <Typography >
                                <IconButton disabled={!permissions.cancreategroups} className={classes.more} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><MoreVertIcon/></IconButton>
                                <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                elevation={1}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                            <Typography color="primary" className={classes.more}>
                                                <AddCircleOutlineIcon/> 
                                            </Typography>
                                            <Typography style={{fontWeight:"bold"}} color="primary"> 
                                                Add to other Groups
                                            </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}> 
                                        <Typography color="secondary" className={classes.more}>
                                            <DeleteOutlineIcon/> 
                                        </Typography>
                                        <Typography style={{fontWeight:"bold"}} color="secondary">
                                            Remove
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </Paper>
            </Grid>
        )
    })

    let errData={
        error:"Something went wrong, refresh or try again later.",
        width:"80%",
        direction:"column",
        iconSize:600
    }

    //Returning the UI and Loading state declared above
    return (
        <Grid 
        justify='center'
        alignItems='center'
        direction='column' 
        container>
            <Grid item>
                
            </Grid>

            <Typography style={{fontWeight:"bold"}} variant="h5" gutterBottom>Members</Typography>

            <Grid item container justify="center" alignItems="center" direction="column">
                {error && !loading?
                    <Err StateData={errData} />:
                    loading?loadingTile:mapMembers
                }
            </Grid>
        </Grid>
    )
}

export default MemberTile
