import { Control, Controller, FieldError } from "react-hook-form";
import { Text } from "../text/Text.component";
import "./inputForm.css";

type InputFormProps = {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  error?: FieldError;
};

export const InputForm = ({
  name,
  control,
  label,
  type,
  error,
}: InputFormProps) => {
  return (
    <div className="form-group">
      <label className="form-group__label" htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-group__input ${
              error?.message ? "form-group__input--error" : ""
            } `}
          />
        )}
      />
      {error && <Text variant="error">{error.message || ""}</Text>}
    </div>
  );
};
