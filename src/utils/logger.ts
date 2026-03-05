type LogLevel = 'debug' | 'info' | 'warn' | 'error';
const LOG_LEVELS: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };
const currentLevel: LogLevel = (import.meta.env.DEV) ? 'debug' : 'warn';
function shouldLog(level: LogLevel): boolean { return LOG_LEVELS[level] >= LOG_LEVELS[currentLevel]; }
export const logger = {
  debug: (...args: unknown[]) => { if (shouldLog('debug')) console.debug('[DEBUG]', ...args); },
  info: (...args: unknown[]) => { if (shouldLog('info')) console.info('[INFO]', ...args); },
  warn: (...args: unknown[]) => { if (shouldLog('warn')) console.warn('[WARN]', ...args); },
  error: (...args: unknown[]) => { if (shouldLog('error')) console.error('[ERROR]', ...args); },
  group: (label: string) => { if (shouldLog('debug')) console.group(label); },
  groupEnd: () => { if (shouldLog('debug')) console.groupEnd(); },
  time: (label: string) => { if (shouldLog('debug')) console.time(label); },
  timeEnd: (label: string) => { if (shouldLog('debug')) console.timeEnd(label); },
};
