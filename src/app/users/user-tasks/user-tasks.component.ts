import { Component, computed, inject, input, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
 // userId = input.required<string>();
// @Input({ required: true }) userId!: string;
  private  usersService = inject(UsersService);
 
  @Input() set userId(value: string){
    console.log('User ID set to:', value);
    this.userId = value;
    
  }
  
  username = computed(() => {
  
    return this.usersService.users.find(user => user.id === this.userId)?.name || 'Unknwn User'});


}
