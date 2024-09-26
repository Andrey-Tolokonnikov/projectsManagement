import { User } from "@/components/entities/User/User"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Formik } from "formik"
import { AuthUser } from "../lib/API"
import { Link, useNavigate } from "react-router-dom"

const AuthForm = () => {
  const emptyInitialValues: User = {
    email: "",
    name: "",
    password: "",
  }

  const navigate = useNavigate()

  const setUser = (user: User) => {
    const fetchUser = async () => {
      await AuthUser(user, navigate)
    }
    fetchUser()
  }

  return (
    <Formik
      initialValues={emptyInitialValues}
      validate={(values: User) => {
        const errors: Partial<User> = {}
        if (!values.email) {
          errors.email = "Required"
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
        ) {
          errors.email = "Invalid email format"
        }
        if (!values.password) {
          errors.password = "Required"
        }
        return errors
      }}
      onSubmit={setUser}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
            <div>
              Почта
              <Input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={
                  errors.email && touched.email
                    ? "border-x-red-400 border-4 dark:border-x-red-400"
                    : ""
                }
              />
            </div>
            <div>
              Пароль
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  errors.password && touched.password
                    ? "border-x-red-400 border-4 dark:border-x-red-400"
                    : ""
                }
              />
            </div>
            <Button type="submit">Войти</Button>
            <Link to="/registration" className="w-full inline-block">
              <Button variant={"secondary"} className="w-full">
                Регистрация
              </Button>
            </Link>
          </form>
        )
      }}
    </Formik>
  )
}

export default AuthForm
