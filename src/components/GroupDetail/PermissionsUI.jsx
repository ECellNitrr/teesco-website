import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Skeleton, Alert, AlertTitle } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";

import FormControl from "@material-ui/core/FormControl";

import MenuItem from "@material-ui/core/MenuItem";

import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    width: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  middle: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    width: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PermissionsUI(props) {
  const classes = useStyles();
  const initialState = props.defaultData;
  const {
    isAdmin,
    checkbox_name,
    permissionSet,
    userTypes,
  } = props.defaultData;

  const [state, setState] = useState(checkbox_name);
  const [userType, setUserType] = useState("");

  //push usertype from dropdown to coming state

  isAdmin && userTypes.push(userType);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleDropdownChange = (event) => {
    setUserType(event.target.value);
  };
  console.log(userType);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {permissionSet ? (
          <Alert severity="success">
            <strong>Changes have been saved successfully!</strong>
          </Alert>
        ) : null}

        <Typography align="center" variant="h5">
          Group Permissions
        </Typography>

        {isAdmin ? (
          <Grid container spacing={3} justify="center">
            <Grid item>
              <FormControl className={classes.formControl}>
                <Select
                  value={userType}
                  onChange={handleDropdownChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Select User Type
                  </MenuItem>
                  <MenuItem value="Executive">Executive</MenuItem>
                  <MenuItem value="PR Executive">PR Executive</MenuItem>
                  <MenuItem value="Managers">Managers</MenuItem>
                  <MenuItem value="Head Coordinators">
                    Head Coordinators
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Button
                style={{ marginTop: "20px" }}
                variant="contained"
                color="primary"
                disabled={!props.defaultData.isAdmin}
              >
                {isAdmin ? "Save" : "Edit"}
              </Button>
            </Grid>
          </Grid>
        ) : null}

        {props.defaultData.loading ? (
          <div>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
          </div>
        ) : (
          <div
            style={{
              "padding-left": 55,
            }}
          >
            <Grid container spacing={3} justify="center">
              <Grid item>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //disabled={!isAdmin}
                        checked={state.checkedA}
                        onChange={isAdmin && handleChange}
                        name="checkedA"
                      />
                    }
                    label="is Admin"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    //disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={isAdmin && handleChange}
                        name="checkedB"
                      />
                    }
                    label="is Staff"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                      />
                    }
                    label="Can Create Tasks"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    //disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedD}
                        onChange={isAdmin && handleChange}
                        name="checkedD"
                      />
                    }
                    label="Can Create Groups"
                  />
                </FormGroup>
              </Grid>

              <Grid item></Grid>
              <div style={{ "padding-left": 25 }}></div>
              <Grid item>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedE}
                        onChange={handleChange}
                        name="checkedE"
                      />
                    }
                    label="Can Send Invite For Staff"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    //disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedF}
                        onChange={isAdmin ? handleChange : !handleChange}
                        name="checkedF"
                      />
                    }
                    label="Can Reply To Queries"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedG}
                        onChange={handleChange}
                        name="checkedG"
                      />
                    }
                    label="Can Access Leaderboard Settings"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedH}
                        onChange={handleChange}
                        name="checkedH"
                      />
                    }
                    label="Can Approve/Reject Proofs"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </div>
        )}
        <div className={classes.middle}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!props.defaultData.isAdmin}
          >
            Edit
          </Button>
        </div>
      </Paper>
    </div>
  );
}
