import React, { useState } from 'react';

const HookEx=()=> {
   
        const [value, setValue] = useState('');
        const handleChange = event => setValue(event.target.value);
        return (
        <div>
        <label>
        My still uncontrolled Input:
        <input type="text" onChange={handleChange} />
        </label>
        <p>
        <strong>Output:</strong> {value}
        </p>
        </div>
        );
    };

export default HookEx
