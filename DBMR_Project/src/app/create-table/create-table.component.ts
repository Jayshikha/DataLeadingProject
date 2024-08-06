import { Component,OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

interface Lead {
  name: string;
  email: string;
  number: number;
}
interface FollowUpLead {
  status: string;
  comment: string;
  amt: any;
}
@Component({
  selector: 'app-create-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-table.component.html',
  styleUrl: './create-table.component.css'
})
export class CreateTableComponent implements OnInit{
  leads: Lead[] = [];
  followleads: FollowUpLead[] = [];
  constructor(private appService: AppService) {}
ngOnInit(): void {
    this.appService.getLeadData()
    this.appService.getFollowUpLeadData()
}

fetchLeads(): void {
  this.appService.getLeadData().subscribe(
    (data: Lead[]) => {
      this.leads = data;
      console.log('Leads fetched successfully:', this.leads);
    },
    error => {
      console.error('Error fetching leads:', error);
    }
  );
}
fetchFollowUpLeads(): void {
  this.appService.getFollowUpLeadData().subscribe(
    (data: FollowUpLead[]) => {
      this.followleads = data;
      console.log('Leads fetched successfully:', this.leads);
    },
    error => {
      console.error('Error fetching leads:', error);
    }
  );
}

addLead(name: string, email: string, number: string): void {
  const num = parseInt(number, 10);
  if (!isNaN(num)) {
    const newLead: Lead = { name, email, number: num };
    this.leads.push(newLead);
    console.log(name,email,number);
    
  }
}
addFollowUpLead(status: string, comment: string, amt: string): void {

    const newLead: FollowUpLead = { status, comment, amt};
    console.log(status, comment, amt);
    this.followleads.push(newLead);

}
}

