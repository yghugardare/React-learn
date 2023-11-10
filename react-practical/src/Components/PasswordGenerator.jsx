import React, { useEffect, useState } from "react";
import { useCallback, useRef} from "react";

function PasswordGenerator() {
    const [password,setPassword] = useState("");
    const [length,setLength] = useState(0);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeCharacters,setIncludeCharacters] = useState(false);
    const passwordRef = useRef(null);
    const generatePassword = useCallback(()=>{
        let pass = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) {
            chars += "1234567890"
        };
        if (includeCharacters){
            chars += "!@#$%^&*()"
        };
        for(let i=1;i<length;i++){
            let randomChar = Math.floor(Math.random()*chars.length+1);
            pass+=chars.charAt(randomChar);
        }
        setPassword(pass);
    },[length,includeNumbers,includeCharacters,setPassword]);
    // when password changes then only memorise the function
    // with new value again
    const copyPassword = useCallback(()=>{
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(3,8);
        window.navigator.clipboard.writeText(password);
    },[password])
    useEffect(()=>{
        generatePassword();
    },[length,includeNumbers,includeCharacters,generatePassword])
  return (
    <div className="bg-slate-700 m-auto max-w-md rounded-md my-5 px-3 py-4">
        <div className="flex gap-4">
            <input
            ref = {passwordRef} 
            value={password}
            type="text" 
            className="rounded-lg p-2  outline-none w-full text-black   " 
            readOnly
            />
            <button 
            onClick={copyPassword}
            className="bg-blue-700 rounded-md px-2 py-3 hover:bg-blue-500"
            >
                Copy
            </button>
        </div>
        <div className="flex justify-around items-center py-2">
            <input 
            value={length}
            onChange={e=>setLength(e.target.value)}
            className="cursor-pointer"
            type="range" 
            id="range" 
            min={0}
            max={100}
            />
            <label htmlFor="range">Length({length})</label>
            <input
            onClick={()=>setIncludeNumbers((prev)=>!prev)}
            className="w-8 cursor-pointer" 
            type="checkbox" 
            id="numbers" 
            />
            <label htmlFor="numbers">Numbers</label>
            <input 
            onClick={()=>setIncludeCharacters(prev=>!prev)}
            className="w-8  cursor-pointer" 
            type="checkbox" 
            id="chars" 
            />
            <label htmlFor="chars">Characters</label>
        </div>
    </div>
  );
}

export default PasswordGenerator;
