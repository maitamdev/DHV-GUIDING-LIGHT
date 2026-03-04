// Form utility helpers
export function serializeForm(form: HTMLFormElement): Record<string, string> {
  const data: Record<string, string> = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => { data[key] = value.toString(); });
  return data;
}
export function resetForm(form: HTMLFormElement): void { form.reset(); }
export function isFormDirty(form: HTMLFormElement, originalValues: Record<string, string>): boolean {
  const currentValues = serializeForm(form);
  return Object.keys(originalValues).some(key => originalValues[key] !== currentValues[key]);
}
export function setFormErrors(errors: Record<string, string>): void {
  Object.entries(errors).forEach(([field, message]) => {
    const el = document.querySelector('[name=""' + field + '""]');
    if (el) el.setAttribute('aria-invalid', 'true');
    const errEl = document.getElementById(field + '-error');
    if (errEl) errEl.textContent = message;
  });
}
