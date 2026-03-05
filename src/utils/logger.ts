// Application logger utility
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_COLORS: Record<LogLevel, string> = {
  debug: 'color: #9CA3AF',
  info: 'color: #3B82F6',
  warn: 'color: #F59E0B',
  error: 'color: #EF4444',
};

class Logger {
  private isDev = import.meta.env?.DEV ?? true;

  private log(level: LogLevel, message: string, data?: unknown): void {
    if (!this.isDev && level === 'debug') return;
    const timestamp = new Date().toISOString().slice(11, 23);
    const prefix = '[' + timestamp + '] [' + level.toUpperCase() + ']';
    if (data) { console.log('%c' + prefix + ' ' + message, LOG_COLORS[level], data); }
    else { console.log('%c' + prefix + ' ' + message, LOG_COLORS[level]); }
  }

  debug(msg: string, data?: unknown) { this.log('debug', msg, data); }
  info(msg: string, data?: unknown) { this.log('info', msg, data); }
  warn(msg: string, data?: unknown) { this.log('warn', msg, data); }
  error(msg: string, data?: unknown) { this.log('error', msg, data); }
}

export const logger = new Logger();
