import { useEffect, useRef } from 'react';

let useClickOutside = (handler) => {
	const cartRef = useRef();

	useEffect(() => {
		const cartEvent = (event) => {
			if (!cartRef.current.contains(event.target)) {
				handler();
			}
		};
		document.body.addEventListener('click', cartEvent);

		return () => document.body.removeEventListener('click', cartEvent);
	});

	return cartRef;
};

export default useClickOutside;
