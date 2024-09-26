import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = (props: Props) => {
  return (
    <div className={cn("max-w-[1000px] mx-auto w-full", props.className)}>
      {props.children}
    </div>
  )
}

export default Container
