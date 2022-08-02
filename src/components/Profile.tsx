import React from "react"

interface ProfileProps {
    name?: string,
    age: number,
    status: "single" | "couple",
    children?: React.ReactNode
}

const Profile = ({ name, age, status, children }: ProfileProps) => {
    return (
        <>
            <div style={{ border: "2px solid #000" }}>

                <h3>Name: {name || "name not found"}</h3>
                <h3>Age: {age}</h3>
                <h3>Status: {status}</h3>
                <h3>{children}</h3>
            </div>
        </>
    )
}

export default Profile