import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import SignupStyles from "./styleModules/Signup.module.css"
import { BsEnvelope } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { IconContext } from "react-icons";
import { FiLock } from "react-icons/fi"
import { RiLockPasswordLine } from "react-icons/ri"


const Signp = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [confirmedPassword, setConfirmedPswrd] = useState("");
	return (
		
		<div className={SignupStyles.signup}>
			<h2>Signup</h2>
			<form>
			<IconContext.Provider value={{className: SignupStyles.icons}}>
				<BsEnvelope/>
			</IconContext.Provider>
				<input
					type="text"
					required
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
               	<IconContext.Provider value={{ className: SignupStyles.icons }}>
					<AiOutlineUser />
				</IconContext.Provider>
				<input
					type="text"
					required
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<IconContext.Provider value={{ className: SignupStyles.icons }}>
					<FiLock/>
				</IconContext.Provider>
				<input
					type="text"
					required
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<IconContext.Provider value={{ className: SignupStyles.icons }}>
					<RiLockPasswordLine/>
				</IconContext.Provider>
				<input
					type="text"
					value={confirmedPassword}
					onChange={(e) => setConfirmedPswrd(e.target.value)}
					required
				/>
				{<button>signup</button>}
			</form>
		</div>
	);
};

export default Signp;
