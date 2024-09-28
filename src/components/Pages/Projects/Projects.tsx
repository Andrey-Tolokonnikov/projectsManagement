import Container from "@/components/shared/Container/Container";
import SectionCreated from "@/components/shared/SectionCreated/SectionCreated";

const Projects = () => {
  return (
    <>
      {true ? (
        <SectionCreated />
      ) : (
        <Container>
          Здесь перечень проектов и где-то кнопка добавления
        </Container>
      )}
    </>
  );
};

export default Projects;
