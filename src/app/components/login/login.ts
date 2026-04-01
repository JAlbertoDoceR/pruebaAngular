import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  mensajeError: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // Formulario y sus reglas de validación
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Respuesta de la API:', response);
          //alert(response.mensaje); // "Login exitoso"
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error:', err);
          this.mensajeError = "Correo o contraseña incorrectos";
        }
      });
    }
  }
}