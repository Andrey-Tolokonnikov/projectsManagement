import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Project from "@/components/widgets/Project/ui/Project";

const ProjectsWapper = () => {
  const { projects } = useSelector((state: RootState) => state.projects);

  return (
    <section className="w-full">
      <div className="w-32 mx-auto my-7">
        <h3 className="font-normal text-lg">Ваши проекты:</h3>
      </div>
      <div className="w-96 mx-auto">
        {projects.map((project) => (
          <Project card={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsWapper;
