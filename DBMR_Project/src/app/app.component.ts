import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "./list/list.component";
import { FollowUpComponent } from "./follow-up/follow-up.component";
import { CreateTableComponent } from "./create-table/create-table.component";
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, FollowUpComponent, CreateTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DBMR_Project';
}
