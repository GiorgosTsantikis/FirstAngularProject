import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function countryCodeValidator():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{        
        const reg:RegExp=/[+]\d{13}$/;
        const pass=reg.test(control.value);
        return pass?null:{phoneNum:{value:control.value}};
    };
}