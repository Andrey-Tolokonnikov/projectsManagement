import CardContainer from "@/components/shared/CardContainer/CardContainer"
import AuthForm from "@/components/widgets/AuthForm/ui/AuthForm"

const Auth = () => {
  return (
    <CardContainer
      title="Авторизация"
      description="Чтобы иметь доступ ко всем функциям системы, сначала авторизуйтесь"
      content={<AuthForm />}
    />
  )
}

export default Auth
