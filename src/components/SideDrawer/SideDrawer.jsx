import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import "./drawerStyle.css";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Logo from "./logo-white.png";

const useStyles = makeStyles({
  list: {
    width: 300,
    //height: "auto",
  },

  fullList: {
    width: "60px",
    height: "auto",
  },
  logo: {
    width: "130px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  center: {
    textAlign: "center",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  groups: {
    marginTop: -30,
    width: 275,
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const { actions, orgs, organisations } = props.defaultData;
  console.log(organisations);
  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      id="drawer"
    >
      <div className="drawerHeader">
        <img src={Logo} alt="ecell-logo" className={classes.logo} />
        <Typography variant="h4" className="teesco">
          teesco
        </Typography>
      </div>

      <Divider />

      {!orgs ? (
        <Card id="card" variant="outlined">
          <CardContent>
            <Typography className={classes.center} variant="h6" component="h2">
              No Organisations Found
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Button className="golden">Create</Button>
              </Grid>
              <Grid item>
                <Button className="golden">Join</Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      ) : (
        <Card id="card" variant="outlined">
          <CardContent>
            <Typography className={classes.center} variant="h6" component="h2">
              Organisations
            </Typography>
          </CardContent>
          <div>
            <ExpansionPanel id="expansionPanel">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon className="expand" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {organisations.org1.name}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List
                  component="nav"
                  className={classes.groups}
                  aria-label="org groups"
                >
                  <ListItem
                    className="listItem"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                    button
                  >
                    <ListItemText primary={organisations.org1.group1.name} />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* ---------------------------- Org-2 ---------------------------- */}
            <ExpansionPanel id="expansionPanel">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon className="expand" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {organisations.org2.name}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List
                  component="nav"
                  className={classes.groups}
                  aria-label="org groups"
                >
                  <ListItem
                    className="listItem"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                    button
                  >
                    <ListItemText primary={organisations.org2.group1.name} />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* ---------------------------- Org-3 ---------------------------- */}
            <ExpansionPanel id="expansionPanel">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon className="expand" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {organisations.org3.name}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List
                  component="nav"
                  className={classes.groups}
                  aria-label="org groups"
                >
                  <ListItem
                    className="listItem"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                    button
                  >
                    <ListItemText primary={organisations.org3.group1.name} />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Card>
      )}

      {/* ----------------- LIST ------------------------------ */}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.height}
      >
        <ListItem button onClick={handleClick}>
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText style={{ color: "#fff" }} primary="Actions" />
          {open ? (
            <ExpandLess className="expand" />
          ) : (
            <ExpandMore className="expand" />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {["Tasks", "People", "LB Settings", "Statistics", "Certificate"].map(
            (el) => (
              <List component="div" disablePadding>
                <ListItem
                  disabled={actions ? false : true}
                  onClick={toggleDrawer(anchor, false)}
                  onKeyDown={toggleDrawer(anchor, false)}
                  button
                  className="listItem"
                >
                  <ListItemIcon>
                    <StarIcon className="starIcon" />
                  </ListItemIcon>
                  <ListItemText primary={el} />
                </ListItem>
              </List>
            )
          )}
        </Collapse>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Open</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
