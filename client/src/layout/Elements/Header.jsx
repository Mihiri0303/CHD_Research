const Header = () => {
	return (
		<>
			<header className="mb-5 w-full bg-gray-50  shadow-md">
				<div className="mx-auto flex w-full max-w-screen-2xl justify-between gap-5 py-3 px-5">
					<div className="flex items-center gap-3 text-xl font-bold text-blue-700">
						<div className="h-10 w-10 rounded-full bg-blue-700"></div>
						CHD
					</div>
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-full bg-blue-700"></div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
