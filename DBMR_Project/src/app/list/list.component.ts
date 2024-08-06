import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { AppService } from '../app.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] 
})
export class ListComponent implements OnInit {
  data: any[] = []; 
  name:any ;
  email: any;
  number: any;
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
  getUserInput(name:string,email:string,number:any): void {
    this.name = name;
    this.email = email;
    this.number = number;

      // alert(`Name: ${name}`);
      // alert(`Email: ${email}`);
      // alert(`Number: ${number}`);


  }
  postLeadData(name: string, email: string, number: number): void {
    this.appService.postLeadData(name, email, number).subscribe(
      response => {
        console.log('Success:', response);
        
      },
      error => {
        console.error('Error:', error);
    
      }
    );
  }


}
