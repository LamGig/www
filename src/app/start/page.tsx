
import { Suspense } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { StartProjectForm } from "@/components/StartProjectForm";
import { SiteFooter } from "@/components/SiteFooter";

export default function PricePage() {
  return (
    <>
      <SiteHeader />
      <Suspense fallback={<div className="min-h-screen" />}>
        <StartProjectForm />
      </Suspense>
      <SiteFooter />
    </>
  );
}