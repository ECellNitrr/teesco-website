import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Typography,
  Card,
  CardContent,
  Divider,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemIcon,
} from "@material-ui/core";

import Menu from "@material-ui/core/Menu";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import { deepOrange, deepPurple } from "@material-ui/core/colors";

import MenuIcon from "@material-ui/icons/Menu";
import LabelIcon from "@material-ui/icons/Label";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/imgs/logo-white.png";
import LogoDark from "../../assets/imgs/logo.png";
import person from "../../assets/imgs/person.png";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import StarIcon from "@material-ui/icons/Star";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import "./Drawer.css";

const drawerWidth = 330;

//const ITEM_HEIGHT = 36;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  activeFlag: {
    color: "#3f51b5 !important",
  },
  activeGroup: {
    backgroundColor: "rgb(221, 221, 221) !important",
  },
  disabledGroup: {
    color: "rgb(221, 221, 221) !important",
  },
}));

export default function PersistentDrawerLeft(props) {
  const { orgs, org1, menuItems } = props.defaultData;

  let groups = org1.groups;
  console.log(groups);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    let logo = document.querySelector(".imgBox");
    logo.style.display = "none";
  };

  const handleDrawerClose = () => {
    setOpen(false);
    let logo = document.querySelector(".imgBox");
    logo.style.display = "block";
  };

  return org1.info.role ? (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img
            className="imgBox"
            src={Logo}
            width="55px"
            style={{ marginLeft: "-15px", marginRight: "22px" }}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Grid container spacing={3} justify="center">
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item>
              <Typography align="center" variant="h5" style={{ marginTop: 0 }}>
                teesco
              </Typography>
            </Grid>
          </Grid>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
                <ChevronRightIcon />
              )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Card className="card">
            <CardContent className="center">
              <img src={person} alt="person image" className="centerImage" />
              <Typography
                variant="h6"
                style={{ textAlign: "center" }}
                className={classes.title}
                gutterBottom
              >
                {org1.info.name}
              </Typography>

              <Typography
                style={{
                  textAlign: "center",
                  backgroundColor: "#7a7a7a",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  color: "white",
                  borderRadius: "5px",
                }}
                className={classes.pos}
              >
                {org1.info.role}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="menu"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={openMenu}
              onClose={handleClose}
            >
              <Card className="menuCard">
                <CardContent>
                  <Typography variant="h5">Switch Orgs</Typography>
                  <List>
                    {orgs.map((el) => (
                      <ListItem button>
                        <ListItemText style={{ textAlign: "center" }}>
                          <a href="#">{el.name}</a>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                  <Button className="createBtn">Create or Join orgs</Button>
                </CardContent>
              </Card>
            </Menu>
          </Card>
        </List>
        <List style={{ marginLeft: "10px" }}>
          {menuItems.top.map((item) => (
            <ListItem button id="groups">
              <ListItemIcon>
                {/* <StarIcon style={{ color: "#3f51b5" }} /> */}
                {item == "Dashboard" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    D
                  </Avatar>
                ) : item == "Org Profile" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    O
                  </Avatar>
                ) : item == "Statistics" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    S
                  </Avatar>
                ) : item == "Leaderboard" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    L
                  </Avatar>
                ) : item == "Queries" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    Q
                  </Avatar>
                ) : null}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <div style={{ margin: 10 }}>
          <div className="groupHeader">
            <Typography variant="h6">GROUPS</Typography>
            <IconButton onClick={null} className="groupAdd">
              <GroupAddIcon />
            </IconButton>
          </div>
          <List>
            {groups.map((group) => (
              <ListItem
                button
                className={group.active == "true" ? classes.activeGroup : null}
                id="groups"
              >
                <ListItemIcon>
                  {group.active == "true" ? (
                    <LockOpenIcon
                      className={
                        group.active == "true"
                          ? classes.activeFlag
                          : classes.disabledGroup
                      }
                    />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={group.name} />
              </ListItem>
            ))}
          </List>
          <List style={{ marginLeft: "0px" }}>
            {menuItems.bottom.map((item) => (
              <ListItem button id="groups">
                <ListItemIcon>
                  {item == "Certificates" ? (
                    <Avatar
                      className={classes.orange}
                      style={{ width: "28px", height: "28px" }}
                    >
                      C
                    </Avatar>
                  ) : item == "Settings" ? (
                    <Avatar
                      className={classes.orange}
                      style={{ width: "28px", height: "28px" }}
                    >
                      S
                    </Avatar>
                  ) : item == "Help" ? (
                    <Avatar
                      className={classes.orange}
                      style={{ width: "28px", height: "28px" }}
                    >
                      H
                    </Avatar>
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  ) : (
      <h1>No Roles Display Only Main Page</h1>
    );
}
