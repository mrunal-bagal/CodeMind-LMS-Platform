const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { firstname, lastname, email, phoneNo, message } = req.body;

    if (!firstname || !email || !message) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    console.log("Received Contact Request:", req.body);

    // ✅ Configure Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: "gmail", // or use SMTP settings for your email provider
        auth: {
            user: process.env.MAIL_USER, // Your email address
            pass: process.env.MAIL_PASS  // Your email password or app-specific password
        }
    });

    let adminEmail = "sddudhane8@gmail.com";
    let mailOptions = {
        from: process.env.MAIL_USER,
        to: adminEmail, // Send email to the user
        subject: "Contact Form Submission",
        text: `Hello ${firstname},\n\nThank you for reaching out! We received your message:\n\n"${message}"\n\nWe'll get back to you soon!\n\nBest Regards,\nYour Company Name`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", email);
        return res.status(200).json({ success: true, message: "Message received and email sent" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Error sending email" });
    }
});

module.exports = router;
