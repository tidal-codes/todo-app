import { Field as BaseField, Input } from "@chakra-ui/react";
import type React from "react";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface FieldProps<T extends FieldValues> {
  label: string;
  error?: string | undefined;
  register?: UseFormRegister<T>;
  registerValue?: Path<T>;
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
}

const Field = <T extends FieldValues>({
  label,
  error,
  register,
  registerValue,
  value,
  onChange,
}: FieldProps<T>) => {
  return (
    <BaseField.Root invalid={Boolean(error)}>
      <BaseField.Label>{label}</BaseField.Label>
      {register && registerValue ? (
        <Input
          key={`${Math.random()}`}
          {...register(registerValue)}
          placeholder="me@example.com"
        />
      ) : value !== undefined && onChange ? (
        <Input
          placeholder="me@example.com"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <Input placeholder="me@example.com" />
      )}
      <BaseField.ErrorText>{error}</BaseField.ErrorText>
    </BaseField.Root>
  );
};

export default Field;
