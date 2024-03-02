import React, {useState} from "react";
import './style.css';
const Changecolor = () =>{
    const [colorActive, setcolorActive] = useState('white')
    const hendleRedButton = () =>{
        setcolorActive('red')
    }
    const hendleGreenButton = () =>{
        setcolorActive('green')
    }
    const hendleBlueButton = () =>{
        setcolorActive('blue')
    }
    const getcolor = () => {
        if(colorActive === 'red'){
            return('red');
        }else if(colorActive === 'green'){
            return('green');
        }else if(colorActive === 'blue'){
            return('blue');
        }else{
            return'while';
        }
    };
    const hendleResetButton = () =>{
        setcolorActive('white')
    }
    const boxstyle ={
        backgroundColor: getcolor()
    }
    return(
        <React.Fragment>
            <div className="changecolor">
                <button onClick={hendleRedButton}>Red</button>
                <button onClick={hendleGreenButton}>Green</button>
                <button onClick={hendleBlueButton}>Blue</button>
                <button onClick={hendleResetButton}>Reset</button>
                <div className="box" style={boxstyle}></div>
            </div>
        </React.Fragment>
    )
}
export default (Changecolor)