import React, {useState} from 'react';
import './App.css';

function App() {
    const [number1, setNumber1] = useState( 0 );
    const [number2, setNumber2] = useState( 0 );
    const [result, setResult] = useState(null);

    const [number, setNumber] = useState(1);
    const [operator, setOperator] = useState('');



    return (
        <div className="calc">
            <div className="display">
                <input type="number" value={

                    result !== null ?
                        result
                        : (number === 1 ? number1 : number2)

                } disabled/>
            </div>
            <div className="buttons">
                <div className="left">
                    <button
                        onClick={() => {
                            if(number === 1) setNumber1( number1 === 0 ? number1 : number1 * 10)
                            else setNumber2( number2 === 0 ? number2 : number2 * 10)
                        }}
                    >
                        0
                    </button>
                    <button
                        className="clear"
                    >
                        C
                    </button>
                    <button
                        className="equal"
                        onClick={() => {
                            if(operator === '+'){
                                setResult(number1 + number2);
                            }

                        }}
                    >
                        =
                    </button>
                    {
                        ( new Array( 9 ).fill( null ) ).map( ( a, i ) => {
                            const n = i + 1;

                            return (
                                <button
                                    onClick={() => {
                                        if(number === 1) setNumber1( number1 * 10 + n )
                                        else setNumber2( number2 * 10 + n )
                                    }}
                                >
                                    {n}
                                </button>
                            )
                        } )
                    }
                </div>
                <div className="actions">
                    <button>&divide;</button>

                    <button>&times;</button>

                    <button>-</button>

                    <button
                        onClick={() => {
                            setOperator('+');
                            setNumber(2)
                        }}
                    >+</button>
                </div>
            </div>
        </div>
    );

}

export default App;
