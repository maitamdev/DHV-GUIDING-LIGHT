// Simple API client wrapper
interface RequestConfig { method?: string; body?: unknown; headers?: Record<string, string>; }

export async function apiRequest<T>(url: string, config: RequestConfig = {}): Promise<T> {
  const { method = 'GET', body, headers = {} } = config;
  const response = await fetch(url, {
    method, headers: { 'Content-Type': 'application/json', ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) throw new Error('API Error: ' + response.status);
  return response.json();
}

