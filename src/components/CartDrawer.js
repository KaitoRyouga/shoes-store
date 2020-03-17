import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import {
  Icon,
  Button,
  Badge,
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
  Divider,
  Typography,
  List,
  CssBaseline,
  Toolbar,
  AppBar,
  Drawer
} from "@material-ui/core";

import dataFake from '../data/dataCart';

var data = dataFake;
var subtotal = 0;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth + 150,
    backgroundColor: "#333333"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function PersistentDrawerRight() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dataRender, setData] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const increase = (nameFind, qty) => {
    let dataFind = data.find(item => item.name == nameFind && item.quantity == qty)
    let indexName = data.findIndex(item => item == dataFind)
    dataFind.quantity = Number(dataFind.quantity) + 1
    data[indexName] = dataFind

    setData([data])
  }

  const decrease = (nameFind, qty) => {
    let dataFind = data.find(item => item.name == nameFind && item.quantity == qty)
    let indexName = data.findIndex(item => item == dataFind)
    dataFind.quantity = Number(dataFind.quantity) - 1
    if (dataFind.quantity == 0){
      // dataFind = {}
      console.log(data.splice(indexName, 1))
    }else{
      data[indexName] = dataFind
    }

    setData([data])
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Persistent drawer
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <StyledBadge badgeContent={5} color="secondary">
              <Icon>shopping_cart</Icon>
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <Icon style={{ color: "white" }}>arrow_left</Icon>
            ) : (
              <Icon style={{ color: "white" }}>arrow_left</Icon>
            )}
          </IconButton>
        </div>
        <Divider />
        <div style={{ flexGrow: 1 }}>
          <List style={{ flexGrow: 1 }}>
            {data.map((item, index) => {
              if (item == {}) {
                return 0;
              } else {
                return (
                  <ListItem
                    style={{ color: "white", flexGrow: 1 }}
                    button
                    key={item}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>
                        <ListItemIcon>
                          <img
                            style={{ width: "7em", height: "5em" }}
                            src={item.image}
                          ></img>
                        </ListItemIcon>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <div>
                          <ListItemText primary={item.name}></ListItemText>
                        </div>
                        <div>
                          <ListItemText>Price: {item.price}</ListItemText>
                        </div>
                        <div>
                          <ListItemText>
                            <span>Qty: </span>
                            <IconButton
                              style={{ padding: 5 }}
                              color={"inherit"}
                              onClick={() => decrease(item.name, item.quantity)}
                            >
                              <Icon>keyboard_arrow_left</Icon>
                            </IconButton>
                            <span>{item.quantity}</span>
                            <IconButton
                              style={{ padding: 5 }}
                              color={"inherit"}
                              onClick={() => increase(item.name, item.quantity)}
                            >
                              <Icon>keyboard_arrow_right</Icon>
                            </IconButton>
                          </ListItemText>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                );
              }
            })}
          </List>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: 16,
              marginRight: 16,
              border: "solid",
              borderColor: "#333333",
              borderBottomColor: "white",
              borderTopColor: "white",
              borderWidth: 1
            }}
          >
            <div>
              <span style={{ color: "white", fontSize: 18 }}>Subtotal</span>
            </div>
            <div>
              <span style={{ color: "white", fontSize: 18 }}>
                {/* {subtotal = 0} */}
                {data.map((item, index) => {
                  if (index == 0) {
                    subtotal = 0;
                  }
                  subtotal = subtotal + item.quantity * item.price;
                })}
                {subtotal}VNĐ
              </span>
            </div>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: 16,
              marginRight: 16
            }}
          >
            <Button variant="contained" color="primary">
              CheckOut
            </Button>
            <Button variant="contained">View Cart</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
