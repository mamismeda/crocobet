import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  userData: any;
  user_id: any;
  posts: any;
  constructor(
    private Activerouter: ActivatedRoute,
    private holder: UserServiceService
  ) {
    // method to get users with id's
    this.user_id = this.Activerouter.snapshot.params['id'];
    this.holder.getData().subscribe((data) => {
      this.userData = data.find((el: any) => {
        return el.id == this.user_id;
      });
    });
  }

  ngOnInit(): void {}

  // click event to filter users with userId for posts 
  gett() {
    this.holder.getPost().subscribe((data) => {
      this.posts = data.filter((el: any) => {
        return  el.userId == this.user_id;
        
      });
    });
  }
}
