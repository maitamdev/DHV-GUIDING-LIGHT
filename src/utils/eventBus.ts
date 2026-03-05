type Handler = (...args: unknown[]) => void;
class EventBus {
  private handlers: Map<string, Set<Handler>> = new Map();
  on(event: string, handler: Handler): void {
    if (!this.handlers.has(event)) this.handlers.set(event, new Set());
    this.handlers.get(event)!.add(handler);
  }
  off(event: string, handler: Handler): void { this.handlers.get(event)?.delete(handler); }
  emit(event: string, ...args: unknown[]): void { this.handlers.get(event)?.forEach(h => h(...args)); }
  once(event: string, handler: Handler): void {
    const wrapper: Handler = (...args) => { handler(...args); this.off(event, wrapper); };
    this.on(event, wrapper);
  }
  clear(event?: string): void { event ? this.handlers.delete(event) : this.handlers.clear(); }
}
export const eventBus = new EventBus();
