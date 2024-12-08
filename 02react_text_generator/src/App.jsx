import './App.css'
import {useCallback, useEffect, useRef, useState} from "react";

function App() {

    let counter = 0

    const textRef = useRef(null);

    const [text, setText] = useState("");
    const [length, setLength] = useState(8);
    const [isNumberIncluded, setIsNumberIncluded] = useState(false);
    const [isCharacterIncluded, setIsCharacterIncluded] = useState(false);

    const generator = useCallback(() => {
        counter++;
        console.log(counter)

        let text = ""
        let chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        let numbers = "1234567890"
        let splChars = "!@#$%^&*()_+[];',./"

        if (isNumberIncluded) chars += numbers
        if (isCharacterIncluded) chars += splChars

        for (let i = 1; i <= length; i++) {
            let random = Math.floor(Math.random() * chars.length + 1)
            text += chars.charAt(random)
        }
        setText(text)

    }, [length, isNumberIncluded, isCharacterIncluded, setText]);

    const copyText = useCallback(()=>{
        textRef.current?.select();
        textRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(text);
    },[text])

    useEffect(() => {
        generator()
    }, [length, isNumberIncluded, isCharacterIncluded, setText]);

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500">
                <h1 className="text-white text-center my-3">Password Generator</h1>

                <div className="flex shadow rounded-lg overflow-hidden mb-4">

                    <input
                        className="outline-none w-full py-1 px-3"
                        type="text"
                        value={text}
                        placeholder="Password"
                        readOnly={true}
                        ref={textRef}
                    />
                    <button
                        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                        onClick={copyText}
                    >Copy</button>

                </div>

                <div className="flex text-sm gap-x-2">

                    <div className="flex items-center gap-x-1">
                        <input
                            value={length}
                            type="range"
                            className="cursor-pointer"
                            min={8}
                            max={50}
                            onChange={(e) => {setLength(e.target.value)}}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            id="numberInput"
                            defaultChecked={isNumberIncluded}
                            onChange={() => {setIsNumberIncluded(!isNumberIncluded)}}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            id="characterInput"
                            defaultChecked={isCharacterIncluded}
                            onChange={() => {setIsCharacterIncluded(!isCharacterIncluded)}}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>

                </div>


            </div>
        </>
    )
}

export default App
