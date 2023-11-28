import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { isAfter, parseISO } from "date-fns";

export const DateAfterValidator = (controlName: string, compareToControl: string): ValidatorFn => (formGroup: FormGroup): ValidationErrors => {
  const validatedControl = formGroup.get(controlName);
  const value = validatedControl?.value;
  const compareTo = formGroup.get(compareToControl)?.value;

  if (!compareTo || !value) {
    return null;
  }

  const isValid = isAfter(parseISO(value), parseISO(compareTo));

  const currentErrors: ValidationErrors = validatedControl.errors;

  if (isValid) {

    if (currentErrors) {
      delete currentErrors['dateAfter'];
      validatedControl.setErrors(Object.keys(currentErrors).length ? currentErrors : null);
    }

  } else {
    validatedControl.setErrors({ ...currentErrors, dateAfter: `The date should be after "${compareToControl}"` });
  }

  return null;
}
