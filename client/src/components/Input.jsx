const Input = ({
	type,
	name,
	label,
	PrefixIcon,
	className,
	inputClassName,
	labelClasses,
	required,
	placeholder,
	...props
}) => {
	const id = "input_" + Math.floor(Math.random() * 10000).toString() + name;
	return (
		<div className={`flex w-full flex-col gap-1 overflow-visible ${className}`}>
			{label && (
				<label htmlFor={id} className={`font-medium ${labelClasses || ""}`}>
					{label || name} {required && <span className="text-red-500">*</span>}
				</label>
			)}
			<div className="relative w-full overflow-visible">
				<input
					type={type || "text"}
					{...props}
					name={name}
					required={required}
					placeholder={placeholder || `Enter ${label || name}`}
					className={`relative w-full rounded-md border-gray-300 placeholder:text-gray-400 ${
						PrefixIcon && "pl-9"
					} ${inputClassName}`}
				></input>
				{PrefixIcon && (
					<PrefixIcon className={" absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 stroke-2 text-gray-400"} />
				)}
			</div>
		</div>
	);
};

export default Input;
