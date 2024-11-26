import { useState } from "react";
import { useTasksContext } from "../../context/tasks.context";
import { List } from "../../ui/list/list.component";
import { ListItem } from "../../ui/list/listItem.component";
import { DeleteTaskModal } from "../deleteTaskModal/deleteTaskModal.component";
import "./tasks.css";
import { Task } from "../../types/types";

export const Tasks = () => {
  const { tasks } = useTasksContext();

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} actions={<Actions task={task} />} />
      ))}
    </List>
  );
};

const Actions = ({ task }: { task: Task }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  return (
    <>
      <div className="actions">
        <span className="icon-pencil" onClick={handleOpenDeleteModal}></span>
        <span className="icon-bin2" onClick={handleOpenDeleteModal}></span>
      </div>

      <DeleteTaskModal
        open={openDeleteModal}
        task={task}
        onClose={handleCloseDeleteModal}
      />
    </>
  );
};
