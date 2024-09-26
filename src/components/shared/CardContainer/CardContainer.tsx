import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Container from "@/components/shared/Container/Container"

type Props = {
  title: string
  description?: string
  content: React.ReactNode
}

const CardContainer = (props: Props) => {
  return (
    <Container className="max-w-[600px] mt-16">
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>{props.content}</CardContent>
      </Card>
    </Container>
  )
}

export default CardContainer
