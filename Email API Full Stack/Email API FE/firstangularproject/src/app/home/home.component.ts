import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatButtonModule,MatCardModule,RouterLink],
  templateUrl: './home.component.html',
  standalone:true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
//   constructor(private router:Router){}
// navigateToEmail(){
//   this.router.navigate(['/sendEmail']);

}

