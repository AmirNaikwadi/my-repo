package com.email.EmailController;

import com.email.EmailModel.EmailRequest;
import com.email.EmailService.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @RequestMapping("/welcome")
    public String welcome() {
        return "Welcome to Email API";
    }

    @PostMapping("/sendEmail")
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request) {
        System.out.println("Received Email Request: " + request);

        // Validating the email fields
        if (request.to == null || request.to.isEmpty() || request.subject == null || request.subject.isEmpty()
                || request.message == null || request.message.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email request: All fields are required.");
        }

        String from = "amirn862301@gmail.com";

        try {
            boolean emailSent = emailService.sendEmail(request.to, from, request.subject, request.message);

            if (emailSent) {
                // Return a success response
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_TYPE, "application/json")
                        .body("{\"message\": \"Email sent successfully!\"}");
            } else {
                // Return a failure response
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .header(HttpHeaders.CONTENT_TYPE, "application/json")
                        .body("{\"message\": \"Failed to send email\"}");
            }

        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email: " + e.getMessage());
        }
    }
}
