import { Metadata } from "next";
import React from "react";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Design your resume",
};

const EditorPage: React.FC = () => {
  return (
    <>
      <ResumeEditor />
    </>
  );
};

export default EditorPage;
