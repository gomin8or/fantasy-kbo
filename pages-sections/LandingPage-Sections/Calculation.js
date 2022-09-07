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

export default function SectionPills() {
    const classes = useStyles();
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
                                        tabContent: (
                                            <span>
                                                <p>
                                                    Player 1
                                                </p>
                                                <br />
                                                <p>
                                                    Player 2
                                                </p>
                                                <br />
                                                <p>
                                                    Player 3
                                                </p>
                                                <br />
                                                <p>
                                                    Player 4
                                                </p>
                                                <br />
                                                <p>
                                                    Player 5
                                                </p>
                                                <br />
                                            </span>
                                        )
                                    },
                                    {
                                        tabButton: "Pitchers",
                                        tabIcon: Schedule,
                                        tabContent: (
                                        <span>
                                            <p>
                                                Player 1
                                            </p>
                                            <br />
                                            <p>
                                                Player 2
                                            </p>
                                            <br />
                                            <p>
                                                Player 3
                                            </p>
                                            <br />
                                            <p>
                                                Player 4
                                            </p>
                                            <br />
                                            <p>
                                                Player 5
                                            </p>
                                            <br />
                                        </span>
                                        )
                                    },
                                    {
                                        tabButton: "Batters",
                                        tabIcon: List,
                                        tabContent: (
                                            <span>
                                                <p>
                                                    Player 1
                                                </p>
                                                <br />
                                                <p>
                                                    Player 2
                                                </p>
                                                <br />
                                                <p>
                                                    Player 3
                                                </p>
                                                <br />
                                                <p>
                                                    Player 4
                                                </p>
                                                <br />
                                                <p>
                                                    Player 5
                                                </p>
                                                <br />
                                            </span>
                                        )
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
