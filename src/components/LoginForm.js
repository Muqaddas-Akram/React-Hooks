import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        // ensures that when the form is submitted, the page doesn't reload.
        e.preventDefault();
        //Short Circuit Eval.
        if (email && password) {
        const newEntry = { id: new Date().getTime().toString(),email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        setEmail(""); // for empty fields
        setPassword("");}
        else {
            alert('Please fill out all the fields')
        }
    };

    return (
        <>
            <form onSubmit={submitForm}>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" id="email" autoComplete="off"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                {
                    allEntry.map ((currEle) => {
                        const {id ,email , password} = currEle; // To Assign Key value
                        return(
                            <div key = {id}>
                                <p>{email}</p>
                                <p>{password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default LoginForm;
