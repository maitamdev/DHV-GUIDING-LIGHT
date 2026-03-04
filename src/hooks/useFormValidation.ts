import { useState, useCallback } from 'react';

type ValidationRule<T> = (value: T) => string | null;

interface FormErrors {
  [key: string]: string | null;
}

interface UseFormValidationResult<T extends Record<string, unknown>> {
  values: T;
  errors: FormErrors;
  touched: Record<string, boolean>;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  setFieldTouched: (field: keyof T) => void;
  validateField: (field: keyof T) => boolean;
  validateAll: () => boolean;
  resetForm: () => void;
  isValid: boolean;
  isDirty: boolean;
}

/**
 * Form validation hook with field-level and form-level validation
 */
export function useFormValidation<T extends Record<string, unknown>>(
  initialValues: T,
  rules: Partial<Record<keyof T, ValidationRule<unknown>[]>>
): UseFormValidationResult<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const setFieldValue = useCallback((field: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setFieldTouched = useCallback((field: keyof T) => {
    setTouched((prev) => ({ ...prev, [field as string]: true }));
  }, []);

  const validateField = useCallback(
    (field: keyof T): boolean => {
      const fieldRules = rules[field];
      if (!fieldRules) return true;

      for (const rule of fieldRules) {
        const error = rule(values[field]);
        if (error) {
          setErrors((prev) => ({ ...prev, [field as string]: error }));
          return false;
        }
      }
      setErrors((prev) => ({ ...prev, [field as string]: null }));
      return true;
    },
    [values, rules]
  );

  const validateAll = useCallback((): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    for (const field of Object.keys(rules) as (keyof T)[]) {
      const fieldRules = rules[field];
      if (!fieldRules) continue;

      for (const rule of fieldRules) {
        const error = rule(values[field]);
        if (error) {
          newErrors[field as string] = error;
          isValid = false;
          break;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [values, rules]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const isValid = Object.values(errors).every((error) => !error);
  const isDirty = JSON.stringify(values) !== JSON.stringify(initialValues);

  return {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    validateField,
    validateAll,
    resetForm,
    isValid,
    isDirty,
  };
}
