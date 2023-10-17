import React, { useState } from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";

function ContactRight() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSendBtn = (event) => {
    event.preventDefault();
    if (username === "") {
      setErrorMessage("User name is requaired");
    } else if (phoneNumber === "") {
      setErrorMessage("Plese number is required");
    } else if (email === "") {
      setErrorMessage("Please give your email");
    } else if (subject === "") {
      setErrorMessage("Plese give your Subject");
    } else if (message === "") {
      setErrorMessage("Message is required");
    } else {
      setSuccessMessage("Your Message Sent Successfully!");
      setErrorMessage("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username, phoneNumber, email, subject, message);
    }
  };

  return (
    <div className="w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-7 rounded-lg">
      <form className="flex flex-col gap-5 font-titleFont">
        <div className="flex gap-4">
          <InputField
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            label="Your Name"
            name="name"
            placeholder="Md. Mithon Ali"
          />
          <InputField
            value={phoneNumber}
            type="tel"
            label="Your Phone *"
            name="phone"
            placeholder="01818085003"
          />
        </div>
        <InputField
          value={email}
          type="email"
          label="Your Email"
          name="email"
          placeholder="mithonphilip@gmail.com"
        />
        <InputField
          value={subject}
          type="text"
          label="Your Subject"
          name="subject"
          placeholder="Enter Your Subject"
        />
        <Textarea
          value={message}
          name="message"
          label="Your Messages"
          placeholder="Enter Your Messages"
        />
        <div className="w-full flex justify-center items-center mt-6">
          <button
            onClick={handleSendBtn}
            type="submit"
            className="bg-gray-900 text-md uppercase px-5 py-2 rounded-md"
          >
            send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactRight;
