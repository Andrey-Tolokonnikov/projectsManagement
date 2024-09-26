import Navigation from "@/components/entities/Navigation/ui/Navigation"
import Container from "../Container/Container"

const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full bg-white z-50 py-6 border-b">
      <Container>
        <Navigation
          items={[
            { title: "Login", href: "/login" },
            { title: "Projects", href: "/projects" },
          ]}
        />
      </Container>
    </div>
  )
}

export default Header
