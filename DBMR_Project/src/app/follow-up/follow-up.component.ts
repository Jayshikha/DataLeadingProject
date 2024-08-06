import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AppService } from '../app.service';
@Component({
  selector: 'app-follow-up',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './follow-up.component.html',
  styleUrl: './follow-up.component.css'
})
export class FollowUpComponent implements OnInit{
  data: any[] = []; 
  status:any ;
  comment: any;
  amt: any;
  constructor(private appService: AppService) { }
  ngOnInit(): void {
    console.log('jayshikha');
    
    this.appService.getData().subscribe(
      (response: any[]) => {
        this.data = response;
        console.log(this.data);
        
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
  getUserInput(): void {
    const statusInput = document.getElementById('status') as HTMLSelectElement | null;
    const amtInput = document.getElementById('amt') as HTMLInputElement | null;
    const commentInput = document.getElementById('comment') as HTMLTextAreaElement | null;

    if (statusInput && amtInput && commentInput) {
      const status = statusInput.value;
      const amt = amtInput.value;
      const comment = commentInput.value;
      console.log(status, amt, comment);

      // Convert amount to number
      const num = parseInt(amt, 10);
      if (!isNaN(num)) {
        this.postFollowUPData(status, comment, num);
      } else {
        alert('Please enter a valid amount.');
      }
    } else {
      alert('One or more input elements not found.');
    }
  }
  postFollowUPData(status:string , comment:string , amt:number): void {
    this.appService.postLeadData( status, comment, amt).subscribe(
      response => {
        console.log('Success:', response);
        
      },
      error => {
        console.error('Error:', error);
    
      }
    );
  }


}

