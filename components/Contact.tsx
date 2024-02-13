import { SubmitHandler, useForm } from "react-hook-form";

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

  const errorMessage = (message: string) => {
    return <div>{message}</div>;
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>first name</p>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="First name"
                {...register("firstName")}
              ></input>
              {errors.firstName &&
                errors.firstName.type === "required" &&
                errorMessage(required)}
            </div>
            <div>
              <p>last name</p>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                {...register("lastName")}
              ></input>
              {errors.lastName &&
                errors.lastName.type === "required" &&
                errorMessage(required)}
            </div>
            <div>
              <p>message</p>
              <input
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                {...register("message", { required: true })}
              ></input>
              {errors.message &&
                errors.message.type === "required" &&
                errorMessage(required)}
            </div>

            <div>
              <p>email</p>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              ></input>
              {errors.email &&
                errors.email.type === "required" &&
                errorMessage(required)}
              {errors.email &&
                errors.email.type === "pattern" &&
                errorMessage(wrongPattern)}
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-end py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-indigo-500 sm:w-fit "
                onClick={async () => {}}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
