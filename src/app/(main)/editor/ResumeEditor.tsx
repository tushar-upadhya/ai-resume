import PersonalInfoForm from "@/components/forms/personal-info/PersonalInfoForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ResumeEditor: React.FC = () => {
  return (
    <div className="flex min-h-[48rem] flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>
      {/* MAIN */}
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full md:w-1/2">
            <PersonalInfoForm />
          </div>

          <div className="grow md:border-r" />

          <div className="hidden w-1/2 md:flex">right</div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t px-3 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant={"secondary"}>Previous Step</Button>
            <Button>Next Step</Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant={"secondary"} asChild>
              <Link href={"/resumes"}>Close </Link>
            </Button>
            <p className="text-muted-foreground opacity-0">Saving...</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeEditor;
