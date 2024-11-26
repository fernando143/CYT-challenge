import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal } from "../../ui/modal/modal.component";
import { FooterModal } from "../../ui/modal/footerModal.component";
import { InputForm } from "../../ui/inputForm/inputForm.component";
import { createTaskService } from "../../services/create-task.service";
import { useTasksContext } from "../../context/tasks.context";

type CreateTaskModalProps = {
  open: boolean;
  onClose: () => void;
};

const TaskSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

type Task = z.infer<typeof TaskSchema>;

export const CreateTaskModal = ({ open, onClose }: CreateTaskModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { fetchTasks } = useTasksContext();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Task>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: Task) => {
    setIsLoading(true);

    try {
      const result = await createTaskService(data);
      fetchTasks();
      handleClose();
    } catch (error) {
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
      title="Add new task"
      footer={
        <FooterModal
          disabled={isLoading}
          onClose={handleClose}
          onConfirm={handleSubmit(onSubmit)}
        />
      }
      onClose={handleClose}
    >
      <div>
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
      </div>
    </Modal>
  );
};
