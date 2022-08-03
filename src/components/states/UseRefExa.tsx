import React, { useRef, useState, useEffect } from "react";

const UseRefExa = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    const focusonName = () => {
        nameRef.current?.focus();
    }

    const focusonEmail = () => {
        emailRef.current?.focus();
    }

    return (
        <>
            <div className='border p-5 m-5'>
                <h5>Use Ref Exa </h5>
                <input ref={nameRef} type="text" className="input" placeholder="Name" />
                <input ref={emailRef} type="text" className="input" placeholder="Email" />
                <button onClick={focusonName} className="btn btn-primary">Foucs on Name</button>
                <button onClick={focusonEmail} className="btn btn-success">Focus on Email</button>
            </div>
        </>
    )
}

export default UseRefExa