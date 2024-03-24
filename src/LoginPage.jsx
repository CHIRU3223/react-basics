import React, {useState, useEffect} from "react";
// import { useHistory } from "react-router-dom"
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory('');
    const handleLogin = () => {
        if(username != "" && password != ""){
            // history.push('/home');
        }
    }
    return (
        <>
        <form>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} /><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} /> <br />

            <input type="submit" onClick={handleLogin} value="Submit" />

        </form>
        </>
    )
}

export default LoginPage;