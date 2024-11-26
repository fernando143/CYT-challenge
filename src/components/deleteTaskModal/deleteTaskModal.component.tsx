import { useState } from "react";
import { Task } from "../../types/types";
import { FooterModal } from "../../ui/modal/footerModal.component";
import { Modal } from "../../ui/modal/modal.component";
import { Text } from "../../ui/text/Text.component";
import { deleteTaskService } from "../../services/delete-task.service";
import { useTasksContext } from "../../context/tasks.context";

type DeleteTaskModalProps = {
  open: boolean;
  task: Pick<Task, "name" | "id">;
  onClose: () => void;
};

export const DeleteTaskModal = ({
  open,
  task,
  onClose,
}: DeleteTaskModalProps) => {
  const { fetchTasks } = useTasksContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await deleteTaskService(task.id);
      fetchTasks();
    } catch (error) {
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      title="Add new task"
      footer={
        <FooterModal
          disabled={isLoading}
          onClose={onClose}
          onConfirm={handleSubmit}
        />
      }
      onClose={onClose}
    >
      <Text variant="paragraph">
        Are you sure that you want to delete{" "}
        <Text element="span" variant="bold">
          {task.name}
        </Text>
        ?
      </Text>
    </Modal>
  );
};
