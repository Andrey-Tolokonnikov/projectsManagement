import { MouseEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  goToBack: () => void;
};

const CreateProjectForm = (props: Props) => {
  function handleToBack(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    props.goToBack();
  }

  return (
    <form>
      <div>
        <Input name="название" />
      </div>
      <div className="flex gap-3 mt-4">
        <Button variant="outline" onClick={handleToBack}>
          Отмена
        </Button>
        <Button>Создать</Button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
