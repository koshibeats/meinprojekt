import { SubmitHandler, useForm } from "react-hook-form";
import css from "../styles/contact.module.css"

type Input = {
  firstName: string;
  lastName: string;
  email: string;
  emailRequired: string;
  message: string;
};

const required = "This field is required";
const maxLength = "Your Input is too long";
const wrongPattern = "The email is in a wrong format";
export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,

    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data: any) => console.log(data);

  const errorMessage = (message : string) => {
    return <div className={css.invalid}>{message}</div>;
  };

  return (
    <div className = {css.formContainer}>
    <form onSubmit={handleSubmit(onSubmit)} className={css.Form}>
      <div className={css.first_Name}>
        <p className={css.fieldName}>first name</p>
        <input
          placeholder="First name"
          className={css.inputField}
          {...register("firstName")}
        ></input>
        {errors.firstName &&
          errors.firstName.type === "required" &&
          errorMessage(required)}
      </div>
      <div>
        <p className={css.fieldName}>last name</p>
        <input placeholder="Last name" {...register("lastName")}></input>
        {errors.lastName &&
          errors.lastName.type === "required" &&
          errorMessage(required)}
      </div>
      <div>
        <p className={css.fieldName}>message</p>
        <input
          {...register("message", { required: true })}
          placeholder="Message"
        ></input>
        {errors.message &&
          errors.message.type === "required" &&
          errorMessage(required)}
      </div>

      <div>
        <p className={css.fieldName}>email</p>
        <input
          placeholder="E-Mail"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          type="email"
          className="input"
        ></input>
        {errors.email &&
          errors.email.type === "required" &&
          errorMessage(required)}
        {errors.email &&
          errors.email.type === "pattern" &&
          errorMessage(wrongPattern)}
      </div>
      <div className = {css.buttonCon}>
        <button className = {css.submitButton} type="submit" onClick={async () => {}}>
          Submit
        </button>
      </div>
    </form>
    </div>
  );
}
