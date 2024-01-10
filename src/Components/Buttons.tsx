import styles from "./Buttons.module.css";


interface State {
  setAll: (value: boolean) => void;
  setBreakfast: (value: boolean) => void;
  setLunch: (value: boolean) => void;
  setShakes: (value: boolean) => void;
}



export const Buttons = ({setAll, setBreakfast, setLunch, setShakes }:State) => {
  
  return (
    <div style={{ display: "flex" }}>
      <button
        className={styles.btn}
        onClick={() => {
          setAll(true);
          setBreakfast(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        <span className={styles.span}>All</span>
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setAll(false);
          setBreakfast(true);
          setLunch(false);
          setShakes(false);
        }}
      >
        <span className={styles.span}>Breakfast</span>
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setAll(false);
          setBreakfast(false);
          setLunch(true);
          setShakes(false);
        }}
      >
        <span className={styles.span}>Lunch</span>
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setAll(false);
          setBreakfast(false);
          setLunch(false);
          setShakes(true);
        }}
      >
        <span className={styles.span}>Shakes</span>
      </button>
    </div>
  );
};

export default Buttons;
