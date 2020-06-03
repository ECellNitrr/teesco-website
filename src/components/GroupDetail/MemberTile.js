import React from 'react'
import {Grid, Paper} from '@material-ui/core'

function MemberTile({StateData:{
    loading,
    memberlist,
    permissions,
    error
}}) {

    let mapMembers=memberlist.map(member=>{
        return(
            <Grid spacing={2} item>
                <Paper>
                    Hello
                </Paper>
            </Grid>
        )
    })

    return (
        <Grid direction='column' container>
            <Grid item>
                {mapMembers}
            </Grid>
        </Grid>
    )
}

export default MemberTile
