import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <LoadingSpinner size="lg" text="Preparando la colección" />
    </div>
  );
}
