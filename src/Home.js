import { useEffect, useState} from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {

	const [friend,setFreind] = useState('mario');

	const myVar = "welcome my colleagues"

	const me = {name : "mohammed", age : 23 , linkden : "https://www.linkedin.com/in/mohammed-el-hamra-b1513821b/"}
	
	const {data: blogs , isLoading ,error} = useFetch('http://localhost:8000/blogs')

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
			</p>
			<button onClick={handleClick}> hello </button>
			{error && <div> Error : {error}</div>}
			{isLoading  && <div> ....Is Loading </div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs!!"  />}
		</div>
	);
}
 
export default Home;