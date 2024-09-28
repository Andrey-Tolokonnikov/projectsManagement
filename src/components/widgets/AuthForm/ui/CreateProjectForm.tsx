import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useDispatch } from "react-redux";
import { addProject } from "@/store/projectsSlice";

type Props = {
  goToBack: () => void;
};

const CreateProjectForm = (props: Props) => {
  const dispatch = useDispatch();

  const [error, setError] = React.useState<boolean>(false);
  const [errorText, setErrorText] = React.useState<string>("");
  const [project, setProject] = React.useState<string>("");

  function handleToBack(event?: React.MouseEvent<HTMLButtonElement>) {
    event && event.preventDefault();
    props.goToBack();
  }

  function handleCreate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (project.trim()) {
      dispatch(addProject({ project, users: ["owner"] }));

      handleToBack();
    } else {
      setError(true);
      setErrorText("Название не может состоять из пробелов!");
    }
  }

  React.useEffect(() => {
    if (error) {
      setError(false);
      setErrorText("");
    }
  }, [project]);

  return (
    <form>
      <div>
        <p className="text-red-400">{errorText}</p>
      </div>
      <div>
        <Input
          name="название"
          value={project}
          onChange={(event) => setProject(event.target.value)}
          className={`${
            error ? "border-x-red-400 border-4 dark:border-x-red-400" : ""
          }`}
        />
      </div>
      <div className="flex gap-3 mt-4">
        <Button variant="outline" onClick={handleToBack}>
          Отмена
        </Button>
        <Button onClick={handleCreate}>Создать</Button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
