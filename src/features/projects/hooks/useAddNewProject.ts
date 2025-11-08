import { useState, useEffect } from "react";
import { useProjects } from "../hooks/useProjcts";

export function useAddNewProject() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    icon: "😆",
    color: "green.300",
    title: "",
    description: "",
  });

  useEffect(() => {
    resetForm();
  }, [open]);
  const { addProject, isAdding } = useProjects();
  const handleChange = (type: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [type]: value }));

  const handleSubmit = async () => {
    await addProject(form);
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      resetForm();
    }, 200);
  };
  const onEmojiSelect = (emoji: string) => {
    handleChange("icon", emoji);
  };
  const onColorSelect = (color: string) => {
    handleChange("color", color);
  };
  const resetForm = () => {
    setForm({ icon: "😆", color: "green.300", title: "", description: "" });
  };
  return {
    open,
    setOpen,
    form,
    handleChange,
    handleSubmit,
    handleClose,
    onEmojiSelect,
    onColorSelect,
    isAdding,
  };
}
