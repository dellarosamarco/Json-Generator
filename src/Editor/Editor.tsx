import { useRef } from "react";

export default function Editor(){

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function test() : void{
        eval(textAreaRef.current?.value!)();
    }

    function asd(x : string) : void{
        console.log(x)
    }

    return (
        <>        
            <textarea ref={textAreaRef}></textarea>
            <button onClick={test}>Test</button>
        </>
    );
}