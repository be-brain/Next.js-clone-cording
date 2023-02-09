import { useForm } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types";

interface LoginForm {
    userName: string;
    email: string;
    password: string;
    error?: string;
}

export default function Forms(props) {
    // register : input과 state를 연결시켜준다
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        reset,
        resetField,
        formState: { errors },
    } = useForm<LoginForm>({
        mode: "onChange",
    });
    // 값이 유효하다면 react-form-hook은 인자로 유효한 입력데이터들을 전달한다
    const onValid = (data: LoginForm) => {
        console.log("onvalid");
        // setError : form 전체에러를 다룬다(ex:백엔드가 오프라인인 경우)
        // fetch(~)
        // setError("error", { message: "오프라인상태입니다" });
        setError("userName", { message: "사용중인 이름입니다" });
        // form을 제출하고 onValid가 실행되면 form을 리셋
        // reset();
        // 특정field만 reset
        resetField("userName");
    };
    // 인자로 error를 받는다
    const onInValid = (errors: FieldErrors) => {
        console.error(errors);
    };
    // input기본값을 설정해준다
    // setValue("userName", "Bella");

    return (
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            {errors.email?.message}
            {/* {errors.error?.message} */}
            {errors.userName?.message}
            <input
                {...register("userName", {
                    required: "이름이 틀렸다",
                    minLength: {
                        message: "5글자이상",
                        value: 5,
                    },
                })}
                type="text"
                placeholder="UserName"
            ></input>
            <input
                {...register("email", {
                    required: "이메일이 틀렸다",
                    validate: {
                        notGmail: (value) =>
                            !value.includes("@gmail.com") ||
                            "Gmail is not allowed",
                    },
                })}
                type="email"
                placeholder="Email"
                className={`${
                    Boolean(errors.email?.message)
                        ? "text-red-600"
                        : "text-green-600"
                }`}
            ></input>
            <input
                {...register("password", {
                    required: "비번이 틀렸다",
                })}
                type="password"
                placeholder="Password"
            ></input>
            <button type="submit">Submit</button>
        </form>
    );
}
