import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  userId: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }
}
