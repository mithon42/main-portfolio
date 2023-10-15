import React from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";

function ContactRight() {
  return (
    <div className="w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-7 rounded-lg">
      <form className="flex flex-col gap-5 font-titleFont">
        <div className="flex gap-4">
          <InputField
            type="text"
            label="Your Name"
            name="name"
            placeholder="Md. Mithon Ali"
          />
          <InputField
            type="tel"
            label="Your Phone *"
            name="phone"
            placeholder="01818085003"
          />
        </div>
        <InputField
          type="email"
          label="Your Email"
          name="email"
          placeholder="mithonphilip@gmail.com"
        />
        <InputField
          type="text"
          label="Your Subject"
          name="subject"
          placeholder="Enter Your Subject"
        />
        <Textarea
          name="message"
          label="Your Messages"
          placeholder="Enter Your Messages"
        />
        <div className="w-full flex justify-center items-center mt-6">
          <button
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
