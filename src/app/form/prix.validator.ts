import { ValidatorFn, AbstractControl } from '@angular/forms';

export function prixRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'prixRange': true };
        }
        return null;
    };
}