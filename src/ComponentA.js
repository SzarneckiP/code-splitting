import React from 'react';
import { add } from './Utils'

const ComponentA = () => {
    return <div>
        {add(1, 1)}
    </div>
}

export default ComponentA;