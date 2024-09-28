import * as React from "react";

import { Button } from "@/components/ui/button";
import CardCreated from "./CardCreated/CardCreated";

const SectionCreate = () => {
  const [isAnimate, setIsAnimate] = React.useState<boolean>(false);
  const [isCreate, setIsCreate] = React.useState<boolean>(false);

  function goToBack() {
    setIsCreate(false);
    setIsAnimate(false);
  }

  React.useEffect(() => {
    if (!isAnimate) return setIsCreate(false);

    if (isAnimate)
      setTimeout(() => {
        setIsCreate(true);
      }, 300);
  }, [isAnimate]);

  return (
    <section className="w-full h-full ">
      {false ? (
        <></>
      ) : isCreate ? (
        <CardCreated goToBack={goToBack} />
      ) : (
        <div
          className={`w-48 mx-auto mt-4 transition-all duration-300 ${
            isAnimate && !isCreate ? "opacity-10" : "opacity-100"
          }`}
        >
          <div className="w-full text-center">
            <p>У вас пока нет проектов!</p>
          </div>
          <div className="w-full mt-4 flex justify-center">
            <Button
              variant="destructive"
              onClick={() => {
                setIsAnimate(true);
              }}
            >
              Создать проект
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionCreate;
