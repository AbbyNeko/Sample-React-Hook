import "../../App.css";
import { useRef, useState } from 'react';

//on focus of addition values, adds values and shows answer to the right
export default function Addition() {

    const addVal1 = useRef();
    const addVal2 = useRef();

    const [solution, setSolution] = useState(0);

    //adds all values
    const add = (e) => {

        e.preventDefault();
        console.log('past')
        if(parseFloat(addVal1.current.value) > 1 && parseFloat(addVal2.current.value) > 1) {
            setSolution(parseFloat(addVal1.current.value) + parseFloat(addVal2.current.value));
        }
    
    }

    //resets form
    const reset = (e) => {

        e.preventDefault();
        addVal1.current.value = 0;
        addVal2.current.value = 0;
        setSolution(0);

    }
    
    return (
        <div className="add-section">
            <h2>Addition</h2>
            <form>
                <input className="reset-btn" type="submit" onClick={reset} value="Reset"/>
                <input type="text" placeholder="0" ref={addVal1} onChange={add}/>
                <p>+</p>
                <input type="text" placeholder="0" ref={addVal2} onChange={add}/>
                <p>= <span id="add-answer">{solution}</span></p>
            </form>
        </div>
    )

}