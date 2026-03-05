export type ResourceType = 'pdf' | 'video' | 'article' | 'tool' | 'template' | 'cheatsheet';
export interface Resource { id: string; title: string; description: string; type: ResourceType; url: string; category: string; tags: string[]; author: string; downloadCount: number; fileSize: number; createdAt: string; thumbnail?: string; }
export interface ResourceCategory { name: string; icon: string; count: number; }
