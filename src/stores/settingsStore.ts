import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface Settings { language: 'en' | 'vi'; fontSize: 'sm' | 'md' | 'lg'; reduceMotion: boolean; emailNotifications: boolean; pushNotifications: boolean; autoplay: boolean; }
interface SettingsState extends Settings { updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void; resetSettings: () => void; }
const defaults: Settings = { language: 'en', fontSize: 'md', reduceMotion: false, emailNotifications: true, pushNotifications: true, autoplay: true };
export const useSettingsStore = create<SettingsState>()(persist((set) => ({
  ...defaults,
  updateSetting: (key, value) => set({ [key]: value }),
  resetSettings: () => set(defaults),
}), { name: 'dhv-settings' }));
