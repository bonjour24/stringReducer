import React, { useState } from "react";
import decode from "../util";

export default function Decoder() {
  const [input, setInput] = useState("");
  const out2 = decode(input);
  return (
    <div>
      <input
        className="form-control mt-5 mb-3"
        type="text"
        placeholder="Enter string to decode"
        onChange={(e) => setInput(e.target.value)}
      />
      <h5>Output String:</h5>
      <br />
      {out2}
    </div>
  );
}
