import { useState, useEffect } from "react";
import { useProjects } from "../hooks/useProjcts";
import { iconPickerData } from "@/shared/constants/iconPickerData";

const initialForm = {
  banner:
    "https://images.pexels.com/photos/29531010/pexels-photo-29531010.jpeg",
  icon: iconPickerData[Math.round(Math.random() * iconPickerData.length)],
  title: "",
  description: "",
};

export function useAddNewProject() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  const { addProject, isAdding } = useProjects();
  const handleChange = (type: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [type]: value }));

  const handleSubmit = async () => {
    await addProject(form);
  };

  const onBannerSelect = (bannerUrl: string) => {
    console.log(bannerUrl);
    handleChange("banner", bannerUrl);
  };
  const onIconSelect = (emoji: string) => {
    handleChange("icon", emoji);
  };

  const resetForm = () => {
    setForm(initialForm);
  };
  return {
    open,
    setOpen,
    form,
    handleChange,
    handleSubmit,
    onBannerSelect,
    onIconSelect,
    isAdding,
  };
}
