import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (bname) => {
    if (bname === "C") {
      setCalVal("");
    } else if (bname === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newValue = calVal + bname;
      setCalVal(newValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
