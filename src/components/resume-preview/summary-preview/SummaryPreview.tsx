import { ResumeValues } from "@/lib/validations/validation";

interface SummaryPreviewProps {
  resumeData: ResumeValues;
}

const SummaryPreview = ({ resumeData }: SummaryPreviewProps) => {
  const { summary, colorHex } = resumeData;

  if (!summary) return null;

  return (
    <>
      <hr
        className="border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold capitalize"
          style={{
            color: colorHex,
          }}
        >
          profile summary
        </p>
        <div className="whitespace-pre-line text-sm">{summary}</div>
      </div>
    </>
  );
};

export default SummaryPreview;
