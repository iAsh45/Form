import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/user.service';

export class UsernameValidator {
  constructor(private userService: UserService) {}

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }

    return null;
  }
}
