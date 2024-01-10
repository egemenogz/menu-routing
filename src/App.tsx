import { useState } from "react";
import { MainNav } from "./Components/MainNav";
import MenuData from "./Components/MenuData";
import { MenuItems } from "./Components/MenuItems";
import 'bootstrap/dist/css/bootstrap.min.css';


interface State {
  all: boolean;
  breakfast: boolean;
  lunch: boolean;
  shakes: boolean;
  setAll: (value: boolean) => void;
  setBreakfast: (value: boolean) => void;
  setLunch: (value: boolean) => void;
  setShakes: (value: boolean) => void;
}

export const App:React.FC<State> = () => {
  const [all, setAll] = useState(true)
  const [breakfast, setBreakfast] = useState(false)
  const [lunch, setLunch] = useState(false)
  const [shakes, setShakes] = useState(false)

  return (
    <>
    <MainNav
      setAll={setAll} setBreakfast={setBreakfast} setLunch={setLunch} setShakes={setShakes}
    />
    <MenuItems items={MenuData} all={all} breakfast={breakfast} lunch={lunch} shakes={shakes} />
    </>
  );
}

export default App;