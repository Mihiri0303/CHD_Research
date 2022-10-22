const Textarea = ({ name, label, className, inputClassName, labelClasses, required, placeholder, ...props }) => {
	const id = "input_" + Math.floor(Math.random() * 10000).toString() + name;
	return (
		<div className={`flex w-full flex-col gap-1 ${className}`}>
			{label && (
				<label htmlFor={id} className={`font-medium ${labelClasses || ""}`}>
					{label || name} {required && <span className="text-red-500">*</span>}
				</label>
			)}
			<textarea
				{...props}
				name={name}
				required={required}
				placeholder={placeholder || `Enter ${label || name}`}
				className={`w-full rounded-md border-gray-300 placeholder:text-gray-400 ${inputClassName}`}
			></textarea>
		</div>
	);
};

export default Textarea;
