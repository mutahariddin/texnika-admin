"use client";
import { Input, Button } from "antd"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await axios.post("https://82723be0a7c6d722.mokky.dev/auth", {
            email,
            password,
        })

        if (res.data.token) {
            router.push("/")
        } else {
            alert("Login failed")
        }
 
    }
    return (
        <section>
    <h2>Login Form</h2>
    <form onSubmit={handleSubmit}>
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button type="primary" htmlType="submit">Register</Button>
    </form>
</section>
    )
}