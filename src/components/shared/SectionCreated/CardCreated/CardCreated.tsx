import { useEffect, useState } from "react"
import CardContainer from "../../CardContainer/CardContainer"
import CreateProjectForm from "@/components/widgets/AuthForm/ui/CreateProjectForm"

type Props = {
  goToBack: () => void
}

const CardCreated = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) setIsVisible(true)
  }, [isVisible])

  return (
    <div
      className={`transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-50"
      }`}
    >
      <CardContainer
        title="Новый проект"
        description="Введите, пожалуйста, название проекта для его создания "
        content={<CreateProjectForm goToBack={props.goToBack} />}
      />
    </div>
  )
}

export default CardCreated
