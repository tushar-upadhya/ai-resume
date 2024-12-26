"use client";

import Breadcrumbs from "@/components/bread-crumbs/Breadcrumbs";
import Footer from "@/components/footer/Footer";
import ResumePreviewSection from "@/components/resume-preview/resume-preview-section/ResumePreviewSection";
import { steps } from "@/lib/steps/steps";
import { ResumeValues } from "@/lib/validations/validation";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ResumeEditor: React.FC = () => {
  const searchParams = useSearchParams();
  const [resumeData, setResumeData] = useState<ResumeValues>({});

  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (steps) => steps.key === currentStep,
  )?.component;

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
          <div className="w-full space-y-6 p-3 md:w-1/2">
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
          />
        </div>
      </main>

      {/* FOOTER */}
      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
};

export default ResumeEditor;
