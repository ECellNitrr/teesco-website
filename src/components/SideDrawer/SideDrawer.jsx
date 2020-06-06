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

import Grid from "@material-ui/core/Grid";
import Logo from "./logo-white.png";
import LogoDark from "./logo.png";
import person from "./person.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter-1.png";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

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
  const { orgs, org1 } = props.defaultData;

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

  return (
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
            <Grid item>
              <img
                src={LogoDark}
                width="55px"
                alt="ecell logo"
                style={{ padding: 0 }}
              />
            </Grid>
            <Grid item>
              <Typography align="center" variant="h5" style={{ marginTop: 12 }}>
                teesco
              </Typography>
            </Grid>
            {/* <Grid item></Grid> */}
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
              style={{ textAlign: "center" }}
              className={classes.pos}
              color="textSecondary"
            >
              <em>"{org1.info.about}"</em>
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
                  <div className="box">
                    {orgs.map((el) => (
                      <div className="boxes">
                        <img src={el.logo} width="55px" />
                        {el.name}
                      </div>
                    ))}
                  </div>
                </List>
                <Button className="createBtn">Create or Join orgs</Button>
              </CardContent>
            </Card>
          </Menu>
        </Card>
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
                  <LabelIcon
                    className={
                      group.active == "true"
                        ? classes.activeFlag
                        : classes.disabledGroup
                    }
                  />
                </ListItemIcon>
                <ListItemText primary={group.name} />
              </ListItem>
            ))}
          </List>
        </div>
        <Card className="card2">
          <CardContent>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              INVITE PEOPLE
            </Typography>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <img src={facebook} alt="facebook icon" className="icon" />
              <img src={instagram} alt="facebook icon" className="icon" />
              <img src={linkedin} alt="facebook icon" className="icon" />
              <img src={twitter} alt="facebook icon" className="icon" />
            </div>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              OR
            </Typography>
            <div className="inviteBox">
              <input
                type="text"
                style={{
                  width: "100%",
                  border: "1.5px solid #333",
                  padding: "5px",
                }}
                placeholder="invite link"
              />
              <button
                style={{ border: "1.5px solid #333", background: "none" }}
              >
                <FileCopyIcon />
              </button>
            </div>
            <footer
              style={{
                textAlign: "center",
                marginTop: "15px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              <Typography>teesco.org &copy; 2020</Typography>
            </footer>
          </CardContent>
        </Card>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
