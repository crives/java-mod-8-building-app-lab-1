import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css']
})
export class UserMessageComponentComponent implements OnInit {
  
  @Input() message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 0,
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
