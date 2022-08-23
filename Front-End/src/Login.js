import { useEffect, useState } from "react";

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (  
        <div className="login">
            <h2>LOGIN</h2>
			<form >
				
				<label>UserName :</label>
				<input
					type="text"
					required
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<label>Blog Body :</label>
				<input
                type = "password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				></input>
				
				{<button>Login</button>}
				{/* {<button>Adding Blog...</button>} */}
                </form>
        </div>
    );
}
 
export default Login;