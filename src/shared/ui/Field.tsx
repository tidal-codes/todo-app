import { Field as BaseField, Input } from "@chakra-ui/react";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface FieldProps<T extends FieldValues> {
  label: string;
  error: string | undefined;
  register: UseFormRegister<T>;
  registerValue: Path<T>;
}

const Field = <T extends FieldValues>({
  label,
  error,
  register,
  registerValue,
}: FieldProps<T>) => {
  return (
    <div>
      <BaseField.Root invalid={Boolean(error)}>
        <BaseField.Label>{label}</BaseField.Label>
        <Input
          key={`${Math.random()}`}
          {...register(registerValue)}
          placeholder="me@example.com"
        />
        <BaseField.ErrorText>{error}</BaseField.ErrorText>
      </BaseField.Root>
    </div>
  );
};

export default Field;
