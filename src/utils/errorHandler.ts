export class AppError extends Error {
  code: string; statusCode: number;
  constructor(message: string, code: string = 'UNKNOWN', statusCode: number = 500) {
    super(message); this.name = 'AppError'; this.code = code; this.statusCode = statusCode;
  }
}
export function handleApiError(error: unknown): AppError {
  if (error instanceof AppError) return error;
  if (error instanceof Error) return new AppError(error.message, 'API_ERROR');
  return new AppError('An unexpected error occurred', 'UNKNOWN');
}
export function isNetworkError(error: unknown): boolean {
  return error instanceof TypeError && error.message.includes('fetch');
}
export function getUserFriendlyMessage(error: AppError): string {
  const messages: Record<string, string> = {
    AUTH_ERROR: 'Please sign in and try again.',
    NOT_FOUND: 'The requested item could not be found.',
    NETWORK_ERROR: 'Please check your internet connection.',
    PERMISSION_DENIED: 'You do not have permission for this action.',
  };
  return messages[error.code] || error.message;
}
