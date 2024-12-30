"use client";

import Breadcrumbs from "@/components/bread-crumbs/Breadcrumbs";
import Footer from "@/components/footer/Footer";
import ResumePreviewSection from "@/components/resume-preview/resume-preview-section/ResumePreviewSection";
import useAutoSaveResume from "@/hooks/useAutoSaveResume";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import { mapToResumeValues } from "@/lib/map-to-resume-values/mapToResumeValues";
import { steps } from "@/lib/steps/steps";
import { ResumeServerData } from "@/lib/type/types";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validations/validation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}
const ResumeEditor = ({ resumeToEdit }: ResumeEditorProps) => {
  const searchParams = useSearchParams();
  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit ? mapToResumeValues(resumeToEdit) : {},
  );

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);
  const { hasUnSavedChanges, isSaving } = useAutoSaveResume(resumeData);
  useUnloadWarning(hasUnSavedChanges);

  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (steps) => steps.key === currentStep,
  )?.component;

  // useUnloadWarning();

  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER */}
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>

      {/* MAIN */}
      <main className="grow overflow-auto">
        <div className="flex w-full">
          <div
            className={cn(
              "w-full space-y-6 p-3 md:block md:w-1/2",
              showSmResumePreview && "hidden",
            )}
          >
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>

          <div className="grow md:border-r" />

          {/* <div className="hidden w-1/2 md:flex">
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          </div> */}
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(showSmResumePreview && "flex")}
          />
        </div>
      </main>

      {/* FOOTER */}
      <Footer
        currentStep={currentStep}
        setCurrentStep={setStep}
        showSmResumePreview={showSmResumePreview}
        setShowSmResumePreview={setShowSmResumePreview}
        isSaving={isSaving}
      />
    </div>
  );
};

export default ResumeEditor;
