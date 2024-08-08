import React, { useState, useEffect } from 'react';

const Counts = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count>=1) {
        document.title = `Chats (${count})`;}//Title
        else {
            document.title = "Chat";
        }
    },[count]); //Dependency list => not rerender  on every render(jesy hum ny apni web site py ik bar dekhana ho kesi chiz ko like wtsapp msg 10 etc)

    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

export default Counts;
