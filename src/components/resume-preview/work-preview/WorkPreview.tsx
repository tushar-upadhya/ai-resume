import { ResumeValues } from "@/lib/validations/validation";
import { formatDate } from "date-fns";

interface WorkPreviewProps {
  resumeData: ResumeValues;
}
const WorkPreview = ({ resumeData }: WorkPreviewProps) => {
  const { workExperiences } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;
  return (
    <>
      <hr className="border-2" />
      <div className="space-y-3">
        <p className="text-lg font-semibold">Work experience</p>
        {workExperiencesNotEmpty.map((exp, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>{exp.position}</span>
              {exp.startDate && (
                <span>
                  {formatDate(exp.startDate, "MM/yyyy")} -{" "}
                  {exp.endDate ? formatDate(exp.endDate, "MM/yyyy") : "Present"}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{exp.company}</p>
            <div className="whitespace-pre-line text-xs">{exp.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkPreview;
