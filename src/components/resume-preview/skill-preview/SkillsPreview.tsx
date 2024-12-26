import { Badge } from "@/components/ui/badge";
import { ResumeValues } from "@/lib/validations/validation";

interface SkillsPreviewProps {
  resumeData: ResumeValues;
}
const SkillsPreview = ({ resumeData }: SkillsPreviewProps) => {
  const { skills } = resumeData;

  if (!skills?.length) return null;
  return (
    <>
      <hr className="border-2" />
      <div className="break-inside-avoid space-y-3">
        <p className="text-lg font-semibold">Skills</p>
        <div className="flex break-inside-avoid flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="rounded-md bg-black text-white hover:bg-black"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsPreview;
