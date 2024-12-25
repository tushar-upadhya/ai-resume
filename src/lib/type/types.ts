import { ResumeValues } from "../validations/validation";

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}
