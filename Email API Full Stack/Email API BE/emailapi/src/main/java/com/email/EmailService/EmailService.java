package com.email.EmailService;

import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailService {
    public boolean sendEmail(String to, String from, String subject, String message){

        //variable for gmail host
        String host = "smtp.gmail.com";

        //Getting system properties
        Properties properties = System.getProperties();

        //Setting properties
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");

        //Getting Session Object
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                System.out.println("Authenticating...........");
                return new PasswordAuthentication("amirn862301@gmail.com","hidb rjiy ineu uilo");
            }
        });

        session.setDebug(true);

        //Composing email message
        MimeMessage m = new MimeMessage(session);

        //Setting from, to, subject, message
        try{
            m.setFrom(from);
            m.setRecipient(Message.RecipientType.TO,new InternetAddress(to));
            m.setSubject(subject);
            m.setText(message);

            //Send email

            Transport.send(m);
            System.out.println("Email sent successfully....");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return true;
    }

}
