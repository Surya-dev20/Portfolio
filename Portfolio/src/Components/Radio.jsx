import { useState } from "react";
import Library from "./Library";
import Languages from "./Languages";
import Tools from "./Tools";

const Radio = () => {
  const [select, setSelect] = useState("lang");

  return (
    <div>
      <div className="radio ms-2">
        <label>
          <input
            type="radio"
            name="skill"
            value="lang"
            checked={select === "lang"}
            onChange={(e) => setSelect(e.target.value)}
            className="round"
          />
          Languages
        </label>

        <label>
          <input
            type="radio"
            name="skill"
            value="framework"
            checked={select === "framework"}
            onChange={(e) => setSelect(e.target.value)}
            className="round"
          />
          Framework / Library
        </label>

        <label>
          <input
            type="radio"
            name="skill"
            value="tool"
            checked={select === "tool"}
            onChange={(e) => setSelect(e.target.value)}
            className="round"
          />
          Tools
        </label>
      </div>

      {select === "framework" ? (
        <Library />
      ) : select === "tool" ? (
        <Tools />
      ) : (
        <Languages />
      )}
    </div>
  );
};

export default Radio;
