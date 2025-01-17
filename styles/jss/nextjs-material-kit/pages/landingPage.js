import { hexToRGBAlpha } from "../../nextjs-material-kit";
import { container, title } from "/styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },

  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  sectionTitle: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  sectionSubtitle: {
    color: "#999"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },


  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },

  modal: {
    position: "fixed",
    left: 0, top: 0,
    width: "100vw", height: "100vh",
    zIndex: 1101,
    overflow: "scroll"
  },
  table: {
    width: "100%"
  }
};

export default landingPageStyle;
