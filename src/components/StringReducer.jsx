import React, { useState } from "react";
import { reduceString } from "../util";

export default function StringReducer() {
  const [input, setInput] = useState("");
  const output = reduceString(input);
  return (
    <div>
      <input
        className="form-control mt-5 mb-3"
        type="text"
        placeholder="Enter string to encode"
        onChange={(e) => setInput(e.target.value)}
      />
      <h5>Output String:</h5>
      {output}
      <br />
    </div>
  );
}
