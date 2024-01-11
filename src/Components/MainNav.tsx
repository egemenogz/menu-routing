import React from "react";
import Buttons from "./Buttons";

interface NavbarProps {
  setAll: (value: boolean) => void;
  setBreakfast: (value: boolean) => void;
  setLunch: (value: boolean) => void;
  setShakes: (value: boolean) => void;
}

export const MainNav: React.FC<NavbarProps> = ({setAll, setBreakfast, setShakes, setLunch }) => {
  const breakpoints = [576, 768, 992, 1200];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      Padding: "8rem",
      MarginTop: "2rem",
    },

    logo: {
      marginLeft: "1rem",
      fontSize: "3rem",
      bottom: "0.2rem",
    },

    ul: {
      display: "flex",
      justifyContent: "center",
      listStyle: "none",
      gap: "2rem",
    },

    button: {
      "&:hover": {
        color: "green",
      },
    },

    dine: {
      marginRight: "1rem",
      fontSize: "2rem",
      bottom: "0.2rem",
    },

    [mq[2]]: {
      display: "grid",
      gridTemplateComuns: "repeat(3, 1fr)",
      placeItems: "center",

      Buttons: {
        gridRow: "2",
        gridColumn: "1/4",
      },

      logo: {
        gridRow: "1",
        gridColumn: "1/4",
        position: "relative",
        bottom: "0.2rem",
        fontSize: "3rem",
      },

      dine: {
        gridRow: "1",
        gridColumn: "1/4",
        position: "relative",
        top: "20px",
        fontSize: "1.3rem",
        fontWeight: "400",
      },
    },
  };
  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>.Lina</h2>

      <Buttons
        setAll={setAll} setBreakfast={setBreakfast} setShakes={setShakes} setLunch={setLunch}
      />

      <h3 style={styles.dine}>Dine with us</h3>
    </div>
  );
};

export default MainNav;
