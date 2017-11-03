import { Component } from '@angular/core';
import { GetuserlistService } from './getuserlist.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  private res;

  constructor(private userService: GetuserlistService) {
    
   }

   ngOnInit() {
    this.loadUser();
  }
  
  userList = []


  loadUser() {
    this.userService.getUser().subscribe(data => this.userList = data);
    console.log('The user data is ',this.userList);
  }
}
