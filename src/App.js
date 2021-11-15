import React, { useState, useEffect } from "react";
import react from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [hacker, setHacker] = useState(false);

  function loss() {
    setCount(count - 1);
  }

  function pls() {
    setCount(count + 1);
  }

  function zero() {
    setCount(count - count);
  }

  function Hacker() {
    setCount(count + 10);
  }

  useEffect(() => {
    if (hacker) {
      const loop = setInterval(() => {
        setCount(count + 1);
      }, 10);
      return () => {
        clearInterval(loop);
      };
    }
  });
  function Hacker2() {
    if (hacker) {
      setHacker(false);
      console.log("hacker: off");
    } else {
      setHacker(true);
      console.log("hacker: on");
    }
  }

  return (
    <div style={{ backgroundColor: "#09009B" }} className="App-header">
      <h1>المسبحة الذكية فقط للهكر </h1>
      <h1 className="hassanat">{count} عدد الحسنات</h1>

      <button className="btn" onClick={loss}>
        نقص حسنات
      </button>
      <button className="btn" onClick={pls}>
        زود حسنات
      </button>
      <button className="btn" onClick={zero}>
        صفر الحسنات
      </button>

      <h2 className="hacker">only Hacker </h2>
      <button className="btn" onClick={Hacker}>
        كل ضغطة 10 حسنات
      </button>
      <button className="btn" onClick={Hacker2}>
        قلتش حسنات لانهائية{" "}
      </button>
    </div>
  );
}

export default App;
