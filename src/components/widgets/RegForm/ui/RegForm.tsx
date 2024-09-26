/* eslint-disable no-useless-escape */
import { User } from "@/components/entities/User/User"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { RegUser } from "../lib/API"
import { toast } from "@/hooks/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

const RegForm = () => {
  const emptyInitialValues: User = {
    email: "",
    name: "",
    surname: "",
    patronymic: "",
    password: "",
    passwordDbl: "",
  }

  const navigate = useNavigate()
  const registrateUser = (user: User) => {
    RegUser(user)
      .then(() => navigate("/auth"))
      .then(() => {
        toast({
          title: "Регистрация прошла успешно",
        })
      })
      .catch(() => {
        toast({
          title: "Пользователь с такими данными уже существует",
          variant: "destructive",
        })
      })
  }
  return (
    <Formik
      initialValues={emptyInitialValues}
      validate={(values: User) => {
        const errors: User = {}
        Object.keys(values).forEach((key) => {
          if (!values[key as keyof User]) {
            errors[key as keyof User] = "Required"
          }
        })
        if (values.password !== values.passwordDbl) {
          errors.passwordDbl = "Пароли не совпадают"
        }
        if (
          !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(values.email as string)
        ) {
          errors.email = "invalid"
        }
        return errors
      }}
      onSubmit={registrateUser}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
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
            Фамилия
            <Input
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
              className={
                errors.surname && touched.surname
                  ? "border-x-red-400 border-4 dark:border-x-red-400"
                  : ""
              }
            />
          </div>
          <div>
            Имя
            <Input
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={
                errors.name && touched.name
                  ? "border-x-red-400 border-4 dark:border-x-red-400"
                  : ""
              }
            />
          </div>
          <div>
            Отчество
            <Input
              name="patronymic"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.patronymic}
              className={
                errors.patronymic && touched.patronymic
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
          <div>
            Повторите пароль
            <Input
              name="passwordDbl"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordDbl}
              className={
                touched.passwordDbl && errors.passwordDbl
                  ? "border-x-red-400 border-4 dark:border-x-red-400"
                  : ""
              }
            />
          </div>
          <div>
            <Checkbox required id="terms" className="mr-2" />
            <label
              htmlFor="terms"
              className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Регистрируясь на данной платформе, я подтверждаю своё согласие на{" "}
              <a href="/agreement.txt" className="underline" download>
                обработку персональных данных
              </a>
            </label>
          </div>
          {errors.passwordDbl == "Пароли не совпадают" &&
          touched.passwordDbl ? (
            <p className="text-red-600">{errors.passwordDbl}</p>
          ) : (
            ""
          )}
          <Button
            type="submit"
            disabled={Object.values(errors).some((val) => val)}
          >
            Зарегистироваться
          </Button>
          <Link to="/login" className="w-full inline-block">
            <Button variant={"secondary"} className="w-full">
              Авторизация
            </Button>
          </Link>
        </form>
      )}
    </Formik>
  )
}

export default RegForm
