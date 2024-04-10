import CartContainer from './CartContainer';

export default function Drawer({ data, isShow, totalPrice, setTotalPrice }) {
	return (
		<div className='drawer drawer-end relative z-50'>
			<input id='my-drawer' type='checkbox' className='drawer-toggle' />

			<div className='drawer-side'>
				<label
					htmlFor='my-drawer'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>

				<div className='menu p-4 min-w-fit lg:max-w-xl min-h-full bg-base-200 text-base-content'>
					<CartContainer
						isShow={isShow}
						totalPrice={totalPrice}
						setTotalPrice={setTotalPrice}
					>
						{data}
					</CartContainer>
				</div>
			</div>
		</div>
	);
}
