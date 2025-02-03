import React, { useState } from "react";

export default function Login() {
    const [formVals, setFormVals] = useState({
        email: '',
        passwaord: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // to resest state after submissition
        setFormVals({
            email: '',
            passwaord: ''
        })
    }

    const isValidEmail = formVals.email === '' || formVals.email.includes('@');

    const handleInputChange = (identifier, e) => {
        setFormVals((preValue) => ({
            ...preValue,
            [identifier]: e.target.value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formVals.email}
                        onChange={(e) => handleInputChange('email', e)}
                    // ref={email}
                    />
                    <div className="control-error">{!isValidEmail && <p>Enter a valid email</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formVals.passwaord}
                        onChange={(e) => handleInputChange('passwaord', e)}
                    // ref={password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
