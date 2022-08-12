import { useState} from 'react'

const Home = () => {

	const [friend,setFreind] = useState('mario');
	const myVar = "welcome my colleagues"
	const me = {name : "mohammed", age : 23 , linkden : "https://www.linkedin.com/in/mohammed-el-hamra-b1513821b/"}
	const handleClick = () =>{
		setFreind('luigi')
		console.log("test goes okay")
	}
	return (
		
		<div className="content">
			<h1> {myVar} this is me and my friend {friend} project  </h1>
			<p>
				hi my name is {me.name} i'm {me.age} years old leader
				of this project <br />
				<a href={me.linkden}>here is my linkden</a> 
				<button onClick={handleClick}> hello </button>
			</p>
		</div>
	);
}
 
export default Home;