// npm install express nodemailer cors body-parser
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourEmail@gmail.com",
      pass: "yourAppPassword", // App Password من إعدادات Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "yourEmail@gmail.com",
      subject: `رسالة من ${name}`,
      text: message,
    });
    res.status(200).send("تم الإرسال");
  } catch (err) {
    console.error(err);
    res.status(500).send("فشل في الإرسال");
  }
});

app.listen(5000, () => {
  console.log("Email server running on http://localhost:5000");
});
