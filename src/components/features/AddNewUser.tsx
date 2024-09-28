import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";

import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addUserToProject } from "@/store/projectsSlice";

type Props = {
  children: React.ReactNode;
  id: string;
};

const AddNewUser = (props: Props) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state: RootState) => state.projects);

  const closeRef = React.useRef<HTMLButtonElement>(null);

  const [error, setError] = React.useState<boolean>(false);
  const [errorText, setErrorText] = React.useState<string>("");
  const [user, setUser] = React.useState<string>("");

  function addUser() {
    if (user.trim()) {
      const _project = projects.find((p) => p.id === props.id);

      if (_project?.users.includes(user)) {
        setError(true);
        setErrorText("Такой пользователь уже существует!");
      } else {
        dispatch(addUserToProject({ projectId: props.id, newUser: user }));
        setUser("");
        closeRef.current?.click();
      }
    } else {
      setError(true);
      setErrorText("Почта не может состоять из пробелов!");
    }
  }

  React.useEffect(() => {
    if (error) {
      setError(false);
      setErrorText("");
    }
  }, [user]);

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent>
        <div>
          <Label htmlFor="user">Напиши почту участника</Label>
          {error ? <p className="text-red-400">{errorText}</p> : ""}
          <Input
            id="user"
            className={`${
              error ? "border-x-red-400 border-4 dark:border-x-red-400" : ""
            }`}
            onChange={(event) => setUser(event.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={addUser}>Добавить</Button>
          <DialogClose ref={closeRef} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUser;
