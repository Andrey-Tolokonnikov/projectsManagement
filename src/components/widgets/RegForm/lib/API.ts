import { User } from "@/components/entities/User/model/User"

export const RegUser = (values: User)=>{
  return fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify({name:  values.name, email: values.email, password: values.password}),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res=>res.json())
}
