import { Button } from "@/components/ui/button";
import AddTask from "@/components/features/AddTask";
import AddNewUser from "@/components/features/AddNewUser";

import { IProjects } from "@/store/projectsSlice";

type Props = {
  card: IProjects;
};

const Project = (props: Props) => {
  return (
    <div className="w-full h-32 px-4 pt-2 pb-1 border-2 rounded-lg flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <div>
          <h3>{`Проект ${props.card.project}`}</h3>
        </div>
        <div>
          <p>{`В проекте ${props.card.users[0]} ${
            props.card.users?.[1] ? props.card.users?.[1] : ""
          } ${props.card.users?.[2] ? "и другие" : ""}`}</p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <AddNewUser id={props.card.id}>
          <Button variant="destructive">Добавить участников</Button>
        </AddNewUser>
        <Button>Подробнее</Button>
      </div>
    </div>
  );
};

export default Project;
