import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

const useStyles = makeStyles(styles);

export default function Calculation() {
    const classes = useStyles();

    const renderTeams = ( data ) => {
        return (
            <div className={ classes.table }>
                <GridContainer>
                    <GridItem xs={1}>
                        <span className={classes.rankLabel}>1</span>
                        <span className={classes.gmNameLabel}>구지봉</span>
                        <span className={classes.gmPointLabel}>135.00</span>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                    <GridItem xs={1}>
                        <p className={classes.playerPositionLabel}>SP</p>
                        <p className={classes.playerNameLabel}>스트레일리</p>
                        <p className={classes.playerPointLabel}>19.00</p>
                    </GridItem>
                </GridContainer>


            </div>

        )
    }

    const renderPlayers = ( data ) => {
        return (
            <div className={ classes.table }>
                <GridContainer>
                    <GridItem xs={1}>
                        <span className={classes.rankLabel}>1</span>
                        <span className={classes.gmNameLabel}>구지봉</span>
                        <span className={classes.gmPointLabel}>135.00</span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                    <GridItem xs={1}>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>ea</p>
                            <p className={classes.playerPointLabel}>2</p>
                        </span>
                        <span className={classes.playerPointWrapper}>
                            <p className={classes.playerPositionLabel}>points</p>
                            <p className={classes.playerPointLabel}>19.00</p>
                        </span>
                    </GridItem>
                </GridContainer>


            </div>

        )
    }

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.sectionTitle}>Today</h2>
                    <h5 className={classes.sectionSubtitle}>
                        2022년 9월 25일
                    </h5>
                </GridItem>
            </GridContainer>
            <div className={classes.container}>
                <div id="navigation-pills">
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                            <NavPills
                                color="secondary"
                                tabs={[
                                    {
                                        tabButton: "Teams",
                                        tabIcon: Dashboard,
                                        tabContent: renderTeams()
                                    },
                                    {
                                        tabButton: "Pitchers",
                                        tabIcon: Schedule,
                                        tabContent: renderPlayers()
                                    },
                                    {
                                        tabButton: "Batters",
                                        tabIcon: List,
                                        tabContent: renderPlayers()
                                    }
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
