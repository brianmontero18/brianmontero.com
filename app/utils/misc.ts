export function isDefinitelyAnError(error: unknown): error is Error {
  return !!error && (error instanceof Error || (typeof error === "object" && "message" in error));
}
