// eslint-disable-next-line react/prop-types
export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      aria-live="assertive"
    >
      <h1>Something went wrong!</h1>

      <pre>
        {error.message}
      </pre>

      <p>
        Please try refreshing the page or check your connection.
      </p>

      <button
        type="button"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}
