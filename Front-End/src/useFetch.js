import { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const useFetch = (url,method) => {
	const history = useHistory()
	const [data, setData] = useState(null);

	const [isLoading, setIsLoading] = useState(true);

	const [error, setError] = useState(null);

	useLayoutEffect(() => {
		axios({
			url: url,
			method: method,
		})
		.then((res) => {
			console.log("im in use Effect!!")
			setData(res.data);
		})
		.catch((err) => {
			if (err.message === 'AbortError'){
				console.log('fetch aborted')
			}
			if (err.message === "Request failed with status code 404")
				history.push("/NotFound")
			else{
				setError(err.message)
			}
		})
		.finally(
			setIsLoading(false)
			)
		},[]);
	return { data, isLoading, error };
};
export default useFetch;
