export interface ChangelogEntry { version: string; date: string; type: 'feature' | 'fix' | 'improvement' | 'breaking'; changes: string[]; }
export const changelog: ChangelogEntry[] = [
  { version: '2.0.0', date: '2025-03-01', type: 'feature', changes: ['Complete UI redesign with dark mode', 'AI mentor matching powered by Gemini', 'New portfolio builder', 'Learning roadmaps', 'Meeting scheduling system'] },
  { version: '1.5.0', date: '2025-02-01', type: 'feature', changes: ['Blog section with rich content', 'Certificate management', 'Student analytics dashboard', 'Homework reminder system'] },
  { version: '1.4.0', date: '2025-01-15', type: 'improvement', changes: ['Performance optimizations', 'Improved search functionality', 'Better mobile responsiveness', 'Accessibility improvements'] },
  { version: '1.3.0', date: '2025-01-01', type: 'feature', changes: ['Community page', 'Events calendar', 'Resources library', 'Bookmark system'] },
  { version: '1.2.0', date: '2024-12-15', type: 'fix', changes: ['Fixed course enrollment bug', 'Fixed notification delivery', 'Improved auth flow', 'Fixed dark mode toggle'] },
  { version: '1.0.0', date: '2024-12-01', type: 'feature', changes: ['Initial release', 'Course catalog', 'User authentication', 'Student dashboard', 'Instructor dashboard'] },
];
