import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div className="p-4 bg-red-100 rounded-md text-red-600">
      <h2>یه خطایی پیش اومده 😕</h2>
      <pre className="text-xs text-red-500">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
      >
        تلاش دوباره
      </button>
    </div>
  );
}

export function ErrorBoundaryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error("Caught by Error Boundary:", error, info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
