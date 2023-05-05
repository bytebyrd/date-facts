import React from 'react';
import './FactBox.css'
const FactBox = ({ fact, onGetFact }) => {
    return (
        <div className='fact-box tc'>
            <h2 className='f3'>Did you know?:</h2>
            <h3 className='f4'>{fact}</h3>
            <div>
                <button onClick={onGetFact}>Next</button>
            </div>

        </div>
    )
}

export default FactBox;