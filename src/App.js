import React, {useState} from 'react';
import './App.css';

function App() {
    return (
        <div className="calc">
            <div className="display">
                <input type="number" value={0} disabled/>
            </div>
            <div className="buttons">
                <div className="left">
                    <button>0</button>
                    <button className="clear">C</button>
                    <button className="equal">=</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    {/*{*/}
                    {/*    ( new Array( 9 ).fill( null ) ).map( ( a, i ) => {*/}
                    {/*        const n = i + 1;*/}

                    {/*        return (*/}
                    {/*            <button>{n}</button>*/}
                    {/*        )*/}
                    {/*    } )*/}
                    {/*}*/}
                </div>
                <div className="actions">
                    <button>&divide;</button>
                    <button>&times;</button>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </div>
    );

}

export default App;
