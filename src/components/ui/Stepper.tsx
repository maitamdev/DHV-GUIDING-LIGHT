import React from 'react';
import { FaCheck } from 'react-icons/fa';
interface Step { label: string; description?: string; }
interface Props { steps: Step[]; currentStep: number; className?: string; }
const Stepper: React.FC<Props> = ({ steps, currentStep, className = '' }) => (
  <div className={'flex items-center justify-between ' + className}>
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className='flex flex-col items-center relative'>
          <div className={'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors ' +
            (i < currentStep ? 'bg-blue-600 border-blue-600 text-white' : i === currentStep ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-gray-300 text-gray-400 bg-white')}>
            {i < currentStep ? <FaCheck /> : i + 1}
          </div>
          <p className={'text-xs mt-2 font-medium ' + (i <= currentStep ? 'text-blue-600' : 'text-gray-400')}>{step.label}</p>
        </div>
        {i < steps.length - 1 && <div className={'flex-1 h-0.5 mx-2 mt-[-20px] ' + (i < currentStep ? 'bg-blue-600' : 'bg-gray-200')} />}
      </React.Fragment>
    ))}
  </div>
);
export default Stepper;
