import { useState } from 'react';

// CREATE A CUSTOM HOOK
// https://www.youtube.com/watch?v=Jl4q2cccwf0

function useProductTarget() {
	const [productTarget, setProductTarget] = useState([]);

	return { productTarget };
}

export default useProductTarget;
