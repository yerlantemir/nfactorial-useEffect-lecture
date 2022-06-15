import { useState } from "react";
import "./App.css";
import { Robot } from "./components/Robot";

function App() {
  const [name, setName] = useState("Connor");
  const [showRobot, setShowRobot] = useState(false);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <div className="controllers">
        <div>
          Имя робота:
          <input
            style={{ marginLeft: 12 }}
            value={name}
            onChange={onNameChange}
          />
        </div>
        <button onClick={() => setShowRobot(!showRobot)} className="toggler">
          {showRobot ? "Выключить" : "Включить"}
        </button>
      </div>
      <div className="poligon">{showRobot && <Robot name={name} />}</div>
    </div>
  );
}

export default App;
