import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, SetLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		SetLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => SetLoading(false));
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
