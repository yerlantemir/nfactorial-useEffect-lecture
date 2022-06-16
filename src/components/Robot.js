import { animated } from "react-spring";
import "./robot.css";
import { useAnimation } from "./animation";
import {useEffect, useRef, useState} from "react";
import sound from "./sound.wav";
import {AnotherComponent} from "./AnotherComponent";

const audio = new Audio(sound);

export const Robot = (props) => {
  const { name } = props;
  const [angry, setAngry] = useState(false);

  useEffect(() => {
    console.log('DALIDA')
    audio.play();
    return () => {
      console.log('NARTAY');
    }
  }, [name])

  console.log('AIDAR')

  return (
    <div className="root" >
      <div className="robot">
        <animated.div style={stylesAntenna} className="antenna"></animated.div>
        <animated.div style={stylesHead} className="head">
          <div
            className="eye"
            style={{ background: angry ? "red" : "white" }}
          />
          <div
            className="eye"
            style={{ background: angry ? "red" : "white" }}
          />
        </animated.div>
        <animated.div style={stylesTors} className="torso">
          <div className={"robot-name"}>
            {name}
            <div className="switch" onClick={() => setAngry(!angry)}>
              <span
                className="slider round"
                style={{
                  background: angry ? "#2196F3" : "",
                }}
              ></span>
              <span
                className="rounded"
                style={{
                  transform: angry ? "translateX(26px)" : "",
                }}
              />
            </div>
          </div>

          <animated.div style={stylesLeft} className="left">
            j
          </animated.div>
          <animated.div style={stylesRight} className="right">
            j
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};
