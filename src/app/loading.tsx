import { RefreshCw } from "lucide-react";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <RefreshCw className="h-12 w-12 animate-spin text-white" />
    </div>
  );
};

export default Loading;
