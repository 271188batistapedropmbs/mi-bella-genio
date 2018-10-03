import { AbstractControl } from '@angular/forms';

export function passValidator (control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const confClave = control.value;
    const passControl = control.root.get('clave');
      if (passControl) {
        const passValue = passControl.value;
        if ( passValue !== confClave ) {
          return {
            isError: true
          };
        }
      }
    }
  return null;
}

export function espacioVacio(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const campo = control.value;
    if (campo !== null) {
      if (campo.trim() === '') {
        return {
          isVacio: true
        };
      }
    }

  }
  return null;
}
