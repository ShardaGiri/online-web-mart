import React, { useState } from 'react';
const HookCon=()=> {
    const [value, setValue] = useState('Hello React');
    const handleChange = event => setValue(event.target.value);
    return (
    <div>
    <label>
    My controlled Input:
    <input type="text" value={value} onChange={handleChange} />
    </label>
    <p>
    <strong>Output:</strong> {value}
    </p>
    </div>
    );
};

export default HookCon
