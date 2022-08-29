import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagingDataService } from '../messaging-service.service';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-conversation-thread-component',
  templateUrl: './conversation-thread-component.component.html',
  styleUrls: ['./conversation-thread-component.component.css']
})
export class ConversationThreadComponentComponent implements OnInit {

  senderMessages: Message[];
  userMessages: Message[];

  constructor(private messagingSvce: MessagingDataService) { }

  ngOnInit(): void {
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.messagingSvce.senderMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** sender messages have changed");
      this.senderMessages = messages;
    })
    
    this.userMessages = this.messagingSvce.getUserMessages();
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** user messages have changed");
      this.userMessages = messages;
    })
  }
}
