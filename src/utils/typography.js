import Typography from "typography"

const typography = new Typography({
  baseFontSize: "15px",
  bodyColor: "hsl(255,255%,255%,0.9)",
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Nunito", "sans-serif"],
  overrideStyles: () => ({
    a: {
      textDecoration: "none",
      backgroundColor: "transparent",
    },
    "a:active, a:hover": {
      outlineWidth: "0",
    },
    hr: {
      boxSizing: "content-box",
      overflow: "visible",
      marginBottom: "calc(1.45rem - 1px)",
      background: "hsla(0, 0%, 0%, 0.2)",
      border: "none",
      height: "1px",
    },
    blockquote: {
      marginLeft: "0",
      marginRight: "1.25rem",
      marginTop: "0",
      paddingBottom: "0",
      paddingLeft: "1.45em",
      paddingRight: "0",
      paddingTop: "0",
      marginBottom: "50px",
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    h1: {
      fontSize: "2.5rem",
      marginBottom: "40px",
      lineHeight: "1.1",
    },
    h2: {
      fontSize: "2.62671rem",
      marginBottom: "1.45rem",
    },
    h3: {
      fontSize: " 1.25rem",
      marginBottom: "1.45rem",
    },
    h4: {
      fontSize: "1.3rem",
      marginBottom: "2rem",
    },
    h5: {
      fontSize: "0.85028rem",
      marginBottom: "1.45rem",
    },
    h6: {
      fontSize: "0.78405rem",
      marginBottom: "1.45rem",
    },
  }),
})

// Hot reload typography in development
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
