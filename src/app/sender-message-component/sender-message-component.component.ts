import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message-component.component.html',
  styleUrls: ['./sender-message-component.component.css']
})
export class SenderMessageComponentComponent implements OnInit {
  
  @Input() message = {
    sender: { firstName: "Ludovic", isOnline: true },
    text: "Message from Ludo -- Sender",
    conversationId: 1,
    sequenceNumber: 0,
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  getCurrentStyles() {
    let currentStyles = {
      'background-color': this.message.sender.isOnline ? 'blue' : 'red',
    };
    return currentStyles;
  }

}
