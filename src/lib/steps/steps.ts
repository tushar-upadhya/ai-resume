import EducationInfoForm from "@/components/forms/educations/EducationInfoForm";
import GeneralInfoForm from "@/components/forms/general-info/GeneralInfoForm";
import PersonalInfoForm from "@/components/forms/personal-info/PersonalInfoForm";
import SkillInfoForm from "@/components/forms/skills/SkillInfoForm";
import SummaryInfoForm from "@/components/forms/summary/SummaryInfoForm";
import WorkExperienceInfoForm from "@/components/forms/work-experience/WorkExperienceInfoForm";
import { EditorFormProps } from "../type/types";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General Info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal Info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work Experiences",
    component: WorkExperienceInfoForm,
    key: "work-experiences",
  },
  {
    title: "Education",
    component: EducationInfoForm,
    key: "education",
  },
  {
    title: "Skills",
    component: SkillInfoForm,
    key: "skill",
  },
  {
    title: "Summary",
    component: SummaryInfoForm,
    key: "summary",
  },
];
