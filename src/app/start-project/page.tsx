import { StartProjectForm } from "@/components/StartProjectForm";

export default function StartProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="w-full max-w-2xl">
        <StartProjectForm />
      </div>
    </div>
  );
}