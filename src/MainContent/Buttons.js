import React, {useState} from 'react';

function Buttons(props) {
    let [counter, setCounter]= useState(0);

        function plus() {
            setCounter(counter+1);
    }

       function minus(){
            if (counter>0)
           setCounter(counter-1);
       }

       function reset(){
            setCounter(0);
       }

    return (
        <div>
        <div className="number">
            {counter}
        </div>

        <div className="buttons">

            <button onClick={plus} className="btn btn-blue" >
                Увеличить
            </button>
            <button onClick={minus} className="btn btn-orange">
                Уменьшить
            </button>
            <button onClick={reset} className="btn btn-gray">
                Сбросить
            </button>
        </div>
        </div>
    );
}

export default Buttons;