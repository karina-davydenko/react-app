import { useState } from "react";
import "./Button.css";

function Button() {
  const [text, setText] = useState("Сохранить");

  const clicked = () => {
    setText("Закрыть");
    console.log("Button clicked");
  };

  return (
    <button onClick={clicked} className="button accent">
      {text}
    </button>
  );
}

export default Button;
