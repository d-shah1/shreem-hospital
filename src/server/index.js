const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, medicalCondition } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shahdarsh19820@gmail.com",
      pass: "rjey okod oury rymo",
    },
  });

  const mailOptions = {
    from: email,
    to: "shahdarsh364@gmail.com",
    subject: `New contact form lead from the website`,
    html: `
      <div style="font-family: Tahoma, sans-serif; font-size: 16px; color: #333;">
        <h2 style="font-size: 16px"> You have received a query from your website. The details are as below:</h2>
        <br/>
        <p style="font-size: 14px"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 14px"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 14px"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 14px"><strong>Medical Conditions:</strong> ${medicalCondition}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send message.");
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
