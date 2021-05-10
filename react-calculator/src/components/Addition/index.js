import "../../App.css";
import { useRef } from 'react';

//on focus of addition values, adds values and shows answer to the right
export default function Addition() {

    const addVal1 = useRef();
    const addVal2 = useRef();
    
    return (
        <div className="add-section">
            <h2>Addition</h2>
            <form>
                <input type="text" value="0" ref={addVal1} />
                <p>+</p>
                <input type="text" value="0" ref={addVal2}/>
                <p>= <span id="add-answer"></span></p>
            </form>
        </div>
    )

}