import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css']
})
export class UserMessageComponentComponent implements OnInit {
  
  @Input() message: Message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludo - User",
    conversationId: 1,
    sequenceNumber: 0,
  };
  
  constructor() { }

  ngOnInit(): void {
  }
}
