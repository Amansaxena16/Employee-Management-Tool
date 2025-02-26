import { useState } from "react";

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleForm(e){
        e.preventDefault()
        setEmail("")
        setPassword("")
    }

    return(
        <di>
            <div className="container flex justify-center my-20">
                <form action="" className="flex flex-col w-[30%]" onSubmit={handleForm}>
                    <input className="border-1 border-green-700 text-white my-2 p-2" type="email" value={email} placeholder="Enter your Email" required onChange={(e) => setEmail(e.target.value)}/>

                    <input className="border-1 border-green-700 text-white my-2 p-2" type="password" value={password} placeholder="Enter your Password" required onChange={(e) => setPassword(e.target.value)}/>
                    <button className="py-2 px-20 rounded-xl bg-green-600 my-5">Login</button>
                </form>
            </div>
        </di>
    )
}

export default Login;