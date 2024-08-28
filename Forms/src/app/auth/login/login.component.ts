// import {
//   afterNextRender,
//   Component,
//   DestroyRef,
//   inject,
//   OnInit,
//   viewChild,
// } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { debounceTime } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
//   imports: [FormsModule],
// })
// export class LoginComponent implements OnInit {
//   private form = viewChild<NgForm>('form');
//   private destroyRef = inject(DestroyRef);

//   ngOnInit(): void {
//     localStorage.getItem('saved-login-form');
//   }

//   constructor() {
//     afterNextRender(() => {
//       const savedForm = localStorage.getItem('saved-login-form');

//       if (savedForm) {
//         const loadedFormData = JSON.parse(savedForm);
//         const savedEmail = loadedFormData.email;
//         setTimeout(() => {
//           this.form()?.controls['email'].setValue(savedEmail);
//         }, 1000);
//       }
//       const subscription = this.form()
//         ?.valueChanges?.pipe(debounceTime(1000))
//         .subscribe({
//           next: (value) => {
//             window.localStorage.setItem(
//               'saved-login-form',
//               JSON.stringify({ email: value.email })
//             );
//           },
//         });
//       this.destroyRef.onDestroy(() => subscription?.unsubscribe());
//     });
//   }
//   onSubmit(formData: NgForm) {
//     if (formData.form.invalid) {
//       return;
//     }
//     const enteredEmail = formData.form.value.email;
//     const enteredPassword = formData.form.value.password;

//     console.log(enteredEmail, enteredPassword);

//     formData.form.reset();
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
