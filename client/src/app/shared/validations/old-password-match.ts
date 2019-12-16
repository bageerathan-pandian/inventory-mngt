import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function oldMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = controlName;
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.oldMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control !== matchingControl.value) {
            matchingControl.setErrors({ oldMatch: true });
            // matchingControl.markAsDirty();
        } else {
            matchingControl.setErrors(null);
            // matchingControl.updateValueAndValidity();
        }
    }
}