import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("8");
  const [charaterAllowed, setCharacterAllowed] = useState(true);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charaterAllowed) str += "!@#$%^&*()_+[]{}~`";
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charaterAllowed, numberAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.selectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password]) 

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charaterAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-4xl text-center text-white my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        className="outline-none w-full py-1 px-3 bg-white" 
        value={password}
        placeholder="Password"
        readOnly
        ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyPasswordToClipboard}>
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberAllowed"
            defaultChecked={numberAllowed}
            onClick={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberAllowed">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterAllowed"
            defaultChecked={charaterAllowed}
            onClick={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterAllowed">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
