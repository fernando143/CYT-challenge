import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal } from "../../ui/modal/modal.component";
import { FooterModal } from "../../ui/modal/footerModal.component";
import { InputForm } from "../../ui/inputForm/inputForm.component";
import { createTaskService } from "../../services/create-task.service";
import { updateTaskService } from "../../services/update-task.service";
import { useTasksContext } from "../../context/tasks.context";
import { Task } from "../../types/types";

type CreateEditTaskModalProps = {
  open: boolean;
  task?: Task;
  onClose: () => void;
};

const TaskSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

type TaskSchema = z.infer<typeof TaskSchema>;

export const CreateEditTaskModal = ({
  open,
  task,
  onClose,
}: CreateEditTaskModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { fetchTasks } = useTasksContext();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm<TaskSchema>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (task) {
      setValue("name", task.name);
      setValue("description", task.description);
    } else {
      reset();
    }
  }, [task, setValue, reset]);

  const onSubmit = async (data: TaskSchema) => {
    setIsLoading(true);

    try {
      if (task) {
        await updateTaskService({ ...task, ...data });
      } else {
        await createTaskService(data);
      }

      fetchTasks();
      handleClose();
    } catch (error) {
      console.error("Error submitting task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      title={task ? "Edit Task" : "Add New Task"}
      footer={
        <FooterModal
          disabled={isLoading}
          onClose={handleClose}
          onConfirm={handleSubmit(onSubmit)}
        />
      }
      onClose={handleClose}
    >
      <form>
        <InputForm
          name="name"
          control={control}
          label="Name"
          error={errors.name}
        />
        <InputForm
          name="description"
          control={control}
          label="Description"
          error={errors.description}
        />
      </form>
    </Modal>
  );
};
