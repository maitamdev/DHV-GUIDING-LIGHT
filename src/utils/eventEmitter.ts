// Simple event emitter for app-wide events
type EventHandler = (...args: unknown[]) => void;
class EventEmitter {
  private events: Map<string, EventHandler[]> = new Map();
  on(event: string, handler: EventHandler): () => void {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(handler);
    return () => this.off(event, handler);
  }
  off(event: string, handler: EventHandler): void {
    const handlers = this.events.get(event);
    if (handlers) this.events.set(event, handlers.filter(h => h !== handler));
  }
  emit(event: string, ...args: unknown[]): void {
    this.events.get(event)?.forEach(handler => handler(...args));
  }
  once(event: string, handler: EventHandler): void {
    const wrapper = (...args: unknown[]) => { handler(...args); this.off(event, wrapper); };
    this.on(event, wrapper);
  }
}
export const appEvents = new EventEmitter();
