import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function ProductLoading() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-ivory">
      <LoadingSpinner size="lg" text="Cargando pieza de autor" />
    </div>
  );
}
