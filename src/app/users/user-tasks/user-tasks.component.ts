import { Component, computed, inject, input, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit, OnDestroy {
  // userId = input.required<string>();
  //@Input({ required: true }) userId!: string;
  // private  usersService = inject(UsersService);

  // @Input() set userId(value: string){
  //   this.userId = value;
  // }
  //userId = input.required<string>();
  username = '';
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { };

  // username = computed(() => {
  // console.log('Computing username for userId:', this.userId);

  //   return this.usersService.users.find(user => user.id === this.userId)?.name || 'Unknwn User'});
private subscription : Subscription = new Subscription();

  ngOnInit(): void {
    console.log('UserTasksComponent initialized');
    this.subscription = this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        // handle params here
        this.username = this.usersService.users.find(u => u.id === params.get('userId'))?.name || 'Unknown user';
      }
    });
  }

    ngOnDestroy() {
      console.log('UserTasksComponent destroyed');
      this.subscription.unsubscribe();
    }


  

}

