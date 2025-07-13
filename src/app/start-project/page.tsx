import { StartProjectForm } from "@/components/StartProjectForm";

export default function StartProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl border border-black p-6 lg:p-10 shadow-2xl">
          <div className="mb-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Start Your Project
            </h1>
            <p className="text-lg text-black">
              Tell us about your vision and we'll match you with the perfect team
            </p>
          </div>
          <StartProjectForm />
        </div>
      </div>
    </div>
  );
}