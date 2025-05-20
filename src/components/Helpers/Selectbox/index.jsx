import { useState, useEffect } from "react";
import "./style.css";

export default function Selectbox({ datas = [], className, action, value, children }) {
  const [item, setItem] = useState(value || datas[0]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (value !== undefined) {
      setItem(value);
    }
  }, [value]);

  const handler = (e, selectedValue) => {
    if (action) {
      action(selectedValue);
    }
    setItem(selectedValue);
    setToggle(false); 
  };

  return (
    <>
      {datas.length > 0 && (
        <div className={`my-select-box ${className || ""}`}>
          <button
            onClick={() => setToggle(!toggle)}
            type="button"
            className="my-select-box-btn"
          >
            {children ? children({ item }) : <span>{item}</span>}
          </button>
          {toggle && (
            <div
              className="click-away"
              onClick={() => setToggle(false)}
            ></div>
          )}
          <div className={`my-select-box-section ${toggle ? "open" : ""}`}>
            <ul className="list">
              {datas.map((value) => (
                <li
                  className={item === value ? "selected" : ""}
                  key={value}
                  onClick={(e) => handler(e, value)}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
