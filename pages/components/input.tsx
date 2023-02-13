import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label: string;
    name: string;
    kind?: "text" | "phone" | "price";
    [key: string]: any; // input에 원하는 옵션(prop)을 전달하고싶을때
    // label, name, kind 외에 다른 prop들을 포착해서 input{...rest}에 전부 넣어준다
    register: UseFormRegisterReturn;
    required: boolean;
    type: string;
}

export default function Input({
        label,
        name,
        kind = "text",
        register,
        type,
        required,
    }) {
    return (
        <div>
            <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor={name}
            >
                {label}
            </label>
            {kind === "text" ? (
                <div className="rounded-md relative flex  items-center shadow-sm">
                    <input
                        id={name}
                        required={required}
                        {...register}
                        type={type}
                        //{...rest} // {...rest}를 사용하면 해당 컴포넌트를 사용할때 원하는 prop을 바로 input에 넣어줄수있다
                        // required, max-length, password같은 input의 type등을 다 내보낼수있다
                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
            ) : null}
            {kind === "price" ? (
                <div className="rounded-md relative flex  items-center shadow-sm">
                    <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">$</span>
                    </div>
                    <input
                        id={name}
                        required={required}
                        {...register}
                        type={type}
                        // {...rest}
                        className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                    <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
                        <span className="text-gray-500">KRW</span>
                    </div>
                </div>
            ) : null}
            {kind === "phone" ? (
                <div className="flex rounded-md shadow-sm">
                    <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
                        +82
                    </span>
                    <input
                        id={name}
                        required={required}
                        {...register}
                        type={type}
                        // {...rest}
                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
            ) : null}
        </div>
    );
}
