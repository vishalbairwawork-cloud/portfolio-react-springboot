package com.vishalbairwa.portfolio.controller;

import com.vishalbairwa.portfolio.dto.ContactRequestDto;
import com.vishalbairwa.portfolio.model.ContactMessage;
import com.vishalbairwa.portfolio.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;

    public ContactController(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> submitMessage(@Valid @RequestBody ContactRequestDto request) {
        ContactMessage saved = contactMessageRepository.save(new ContactMessage(
                request.getName(),
                request.getEmail(),
                request.getSubject() != null ? request.getSubject() : "Portfolio Inquiry",
                request.getMessage()
        ));

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Inquiry received and stored successfully.");
        response.put("id", saved.getId());
        response.put("receivedAt", saved.getReceivedAt());

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/messages")
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactMessageRepository.findAllByOrderByReceivedAtDesc());
    }
}
