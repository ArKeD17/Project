import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import style from "./index.module.scss";
// import RestaurantMenu from "@material-ui/icons/RestaurantMenu";
import Dialog from "components/Dialog";
import Logo from "../../assets/img/Logo.png";

import { useScrollTrigger, Slide, Hidden } from "@material-ui/core";

function MyAppBarLogin(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
    target: props.window ? window() : undefined,
  });

  const triggerPrueba = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
    target: props.window ? window() : undefined,
  });

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div className={style.container}></div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {props.component}
          </div>
          <Hidden xsDown>
            <div className={style.container_btn}>
              <Button color="inherit" onClick={handleClickOpen}>
                Contacto
              </Button>
            </div>
          </Hidden>
          <Hidden smUp>
            <div className={style.container_btn}>
              <Button color="inherit" onClick={handleClickOpen}>
                Contacto
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        restaurants={props.restaurants}
        changeFilter={props.changeFilter}
      />

      {!trigger ? null : (
        <Slide appear={false} direction="down" in={triggerPrueba}>
          <AppBar position="fixed" color="inherit">
            <Toolbar>
              <div className={style.container}>
                <div className={style.prueba}>
                  <img src={Logo} alt="logo" />
                  <Typography variant="subtitle1" component="div">
                    Fumipro
                  </Typography>
                </div>
              </div>
              <Hidden xsDown>
                <div className={style.container_btn}>
                  <Button color="inherit" onClick={handleClickOpen}>
                    Contacto
                  </Button>
                </div>
              </Hidden>
              <Hidden smUp>
                <div className={style.container_btn}>
                  <Button color="inherit" onClick={handleClickOpen}>
                    Contacto
                  </Button>
                </div>
              </Hidden>
            </Toolbar>
            <Dialog
              open={open}
              onClose={handleClose}
              restaurants={props.restaurants}
              changeFilter={props.changeFilter}
            />
          </AppBar>
        </Slide>
      )}
    </div>
  );
}

export default MyAppBarLogin;
