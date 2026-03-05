import { useState, useCallback } from 'react';
interface UseStepReturn { currentStep: number; totalSteps: number; isFirst: boolean; isLast: boolean; goToNext: () => void; goToPrev: () => void; goTo: (step: number) => void; reset: () => void; }
export function useStep(totalSteps: number, initialStep: number = 0): UseStepReturn {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const goToNext = useCallback(() => setCurrentStep(s => Math.min(s + 1, totalSteps - 1)), [totalSteps]);
  const goToPrev = useCallback(() => setCurrentStep(s => Math.max(s - 1, 0)), []);
  const goTo = useCallback((step: number) => setCurrentStep(Math.max(0, Math.min(step, totalSteps - 1))), [totalSteps]);
  const reset = useCallback(() => setCurrentStep(initialStep), [initialStep]);
  return { currentStep, totalSteps, isFirst: currentStep === 0, isLast: currentStep === totalSteps - 1, goToNext, goToPrev, goTo, reset };
}
