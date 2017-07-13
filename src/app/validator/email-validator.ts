import { FormControl } from "@angular/forms";

export class EmailValidator {
  private static EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  static validate(control: FormControl): {[key: string]: boolean} {
    return EmailValidator.EMAIL_REGEX.test(control.value) ? null : {'email':true};
  }
}