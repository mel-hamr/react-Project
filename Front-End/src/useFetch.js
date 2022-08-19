import { useLayoutEffect, useState } from "react";
import axios from "axios";
const useFetch = (url,method) => {
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
