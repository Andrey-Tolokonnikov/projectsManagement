import { User } from "@/components/entities/User/User"
import { toast } from "@/hooks/use-toast"

export const AuthUser = (values: User, redirect: (path: string) => void) => {
  return fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email: values.email, password: values.password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(() => redirect("/"))
    .catch(() => {
      toast({
        title: "Пользователь с такими данными не найден",
        variant: "destructive",
      })
    })
}
