import Container from "@/components/shared/Container/Container";
import SectionCreated from "@/components/shared/SectionCreated/SectionCreated";
import ProjectsWapper from "@/components/shared/ProjectsWapper/ProjectsWapper";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Projects = () => {
  const { projects } = useSelector((state: RootState) => state.projects);

  return (
    <>
      {true ? (
        projects.length ? (
          <ProjectsWapper />
        ) : (
          <SectionCreated />
        )
      ) : (
        <Container>
          Здесь перечень проектов и где-то кнопка добавления
        </Container>
      )}
    </>
  );
};

export default Projects;
