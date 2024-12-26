import { ResumeValues } from "@/lib/validations/validation";

interface SummaryPreviewProps {
  resumeData: ResumeValues;
}

const SummaryPreview = ({ resumeData }: SummaryPreviewProps) => {
  const { summary } = resumeData;

  if (!summary) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="break-inside-avoid space-y-3">
        <p className="text-lg font-semibold capitalize">summary</p>
        <div className="whitespace-pre-line text-sm">{summary}</div>
      </div>
    </>
  );
};

export default SummaryPreview;
