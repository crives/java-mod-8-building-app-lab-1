import { Injectable, EventEmitter, Output } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';
import { Message } from './message.model';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessagingDataService {  
  
  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  constructor(
    private loggingSvce: LoggingServiceService,
    private httpClient: HttpClient
  ) {
    loggingSvce.log("Messaging Data Service constructor completed");
}

  private senderMessages: Message[] = [
    {
      sender: { firstName: "Ludovic", isOnline: true },
      text: "Message from Ludovic",
      conversationId: 1,
      sequenceNumber: 0,
    },
    {
      sender: { firstName: "Jessica" },
      text: "Message from Jessica",
      conversationId: 1,
      sequenceNumber: 1,
    },
  ];

  private userMessages: Message[] = [];

  getUserMessages() {
    this.httpClient.get<Message[]>("http://localhost:8080/api/get-user-messages").subscribe(
        (messages: Message[]) => {
            console.log(messages);
            this.userMessages = messages;
            this.userMessagesChanged.emit(this.userMessages);
        }
    )
    return this.userMessages.slice();
  }

  getSenderMessages() {
    return this.senderMessages.slice();
  }


  addUserMessage(newMessage: Message) {
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }
}