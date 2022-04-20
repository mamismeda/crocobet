import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  data: Array<any>;
  jsData: any;
  constructor(private JSONplaceholder: UserServiceService) {
    // take response from json and put it into new array.
    this.data = new Array<any>();
    this.jsData = this.JSONplaceholder.getData().subscribe((data) => {
      return (this.data = data);
    });
  }

  ngOnInit(): void {
    
  }
}
