import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailBackendService } from '../email-backend.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-email',
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatError, MatInputModule, ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
  standalone:true
})
export class EmailComponent {
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  data = {
    to: "",
    subject: "",
    message: ""
  }

  constructor(private email: EmailBackendService) { }

  submitForm() {
    console.log('Form Submitted'); // Add this log to confirm the method is triggered.
  console.log('Form Data:', this.myForm.value); 
    this.email.sendEmail(this.data).subscribe({
      next: (response) => console.log('Success:', response),
      error: (error) => {
        console.error('Error occurred:', error);
        alert(`Failed to send email: ${error.message}`);
      },
      complete: () => console.log('Request completed.')

      // next: response => console.log(response),
      // error: error => console.error(error),
      // complete: () => console.log('Email sent successfully')
    })
  }
}



