import GeneralInfoForm from "@/components/forms/general-info/GeneralInfoForm";
import PersonalInfoForm from "@/components/forms/personal-info/PersonalInfoForm";
import { EditorFormProps } from "../type/types";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General Info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal Info", component: PersonalInfoForm, key: "personal-info" },
];
