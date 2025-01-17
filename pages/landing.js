import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import Calculation from "../pages-sections/LandingPage-Sections/Calculation";
import PointSystem from "../pages-sections/LandingPage-Sections/PointSystem";
import Submit from "../pages-sections/LandingPage-Sections/Submit";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [modalVisibility, setModalVisibility] = React.useState({ visibility: "hidden" });
  const classes = useStyles();
  const { ...rest } = props;

  const openModal = () => {
    setModalVisibility({});
  }
  const closeModal = () => {
    setModalVisibility({ visibility: "hidden" });
  }

  return (
    <div>
      <div className={classes.modal} style={modalVisibility}
        onClick={ () => closeModal() }
      >
        <Button
          color="transparent"
          size="lg"
          onClick={() => closeModal()}
          style={{ color: "#fff", position: "fixed" }}
        >
          Close
        </Button>
        <Submit />
      </div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Fantasy KBO"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Fantasy KBO.</h1>
              <h4>
                Never leave the game.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                onClick={() => openModal()}
              >
                {/* <i className="fas fa-play" /> */}
                Submit Roster
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Calculation />
          <PointSystem />
        </div>
      </div>
      <Footer />
    </div>
  );
}
