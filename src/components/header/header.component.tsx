import { useState } from "react";
import { Button } from "../../ui/button/button.component";
import "./header.css";
import { CreateEditTaskModal } from "../createTaskModal/createTaskModal.component";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleShowModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">TODO List</h1>
        <Button onClick={handleShowModal}>Add task</Button>
      </div>
      <CreateEditTaskModal open={open} onClose={handleCloseModal} />
    </header>
  );
};
