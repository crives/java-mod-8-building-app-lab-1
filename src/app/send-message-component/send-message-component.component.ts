import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { LoggingServiceService } from '../logging-service.service';
import { User } from '../user.model';
import { MessagingDataService } from '../messaging-service.service';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {
  messageString: string;

  constructor(private loggingSvce: LoggingServiceService, private messagingSvce: MessagingDataService) { }

  // loggingSvce = new LoggingServiceService(); // create a new instance of the service

  @Input() message: Message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 0,
  };

  ngOnInit(): void {}

  // use the instance of the logging service in our event handler
  onSendMessage() {
    this.messagingSvce.addUserMessage(new Message(new User("Caroline", true), this.messageString, 1, 0));

    this.loggingSvce.log("Sending following message: ");
    this.loggingSvce.log(this.messageString);
  }
}
