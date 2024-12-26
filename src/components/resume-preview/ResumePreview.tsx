import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validations/validation";
import { useRef } from "react";
import EducationsPreview from "./education-preview/EducationsPreview";
import PersonalPreview from "./personal-preview/PersonalPreview";
import SkillsPreview from "./skill-preview/SkillsPreview";
import SummaryPreview from "./summary-preview/SummaryPreview";
import WorkPreview from "./work-preview/WorkPreview";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}
const ResumePreview = ({ resumeData, className }: ResumePreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);
  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
      >
        {/* <pre>{JSON.stringify(resumeData, null, 2)}</pre> */}
        <PersonalPreview resumeData={resumeData} />
        <SummaryPreview resumeData={resumeData} />
        <WorkPreview resumeData={resumeData} />
        <EducationsPreview resumeData={resumeData} />
        <SkillsPreview resumeData={resumeData} />
      </div>
    </div>
  );
};

export default ResumePreview;
