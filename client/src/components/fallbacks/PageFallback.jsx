import { TailSpin } from "react-loader-spinner";

const PageFallback = () => {
	return (
		<div className="absolute top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-3 text-sm">
			<TailSpin
				height="25"
				width="25"
				color="#1D4ED8"
				ariaLabel="tail-spin-loading"
				radius="1"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
			<p>Page Loading... </p>
		</div>
	);
};

export default PageFallback;
