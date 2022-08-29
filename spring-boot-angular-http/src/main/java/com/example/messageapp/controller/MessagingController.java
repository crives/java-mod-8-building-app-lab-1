package com.example.messageapp.controller;

import com.example.messageapp.model.User;
import com.example.messageapp.model.Message;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MessagingController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-user-messages")
    public List<Message> getUserMessages() {
        List<Message> messages = new ArrayList<Message>();
        messages.add(
                new Message(
                        new User("Aurelie"),
                        "Message from Lilly (Test)",
                        1, 2
                )
        );
        return messages;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-sender-messages")
    public List<Message> getSenderMessages() {
        List<Message> messages = new ArrayList<Message>();
        messages.add(
                new Message(
                        new User("Ludovic", true),
                        "Message from Ludo (Test)",
                        1, 0
                )
        );
        messages.add(
                new Message(
                        new User("Jessica", false),
                        "Message from Jess (Test)",
                        1, 1
                )
        );
        return messages;
    }
}