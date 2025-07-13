"use client";

import { StartProjectForm } from "@/components/StartProjectForm";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StartProjectPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-6">
      {/* Close button */}
      <button
        onClick={handleGoBack}
        className="absolute top-2 right-2 md:top-6 md:right-6 p-2  hover:bg-black/5 rounded-full cursor-pointer transition-colors duration-200 group"
        aria-label="Go back to previous page"
      >
        <X className="w-8 h-8 text-black/60 bỏder group-hover:text-black transition-colors duration-200" strokeWidth={2} />
      </button>

      <div className="w-full max-w-2xl pt-20">
        <StartProjectForm />
      </div>
    </div>
  );
}