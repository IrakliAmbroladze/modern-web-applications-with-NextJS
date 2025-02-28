"use client";

import React, { useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("Irakli");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Welcome;
