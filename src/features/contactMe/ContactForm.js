import React, { useRef } from "react";
import "./contact.css";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export const ContactForm = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const clearData = () => {
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "235448c6-e18a-411b-ad45-5429b7a32372");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      clearData();
      toast.success("I got your message");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="contact-me-form form-group row m-auto "
    >
      <div className="row">
        <div className="input-group col-12 col-lg-6 my-3 ">
          <label htmlFor="name" className="fw-lighter fs-6">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-100"
            required
            ref={name}
          />
        </div>
        <div className="input-group col-12 col-lg-6 my-3">
          <label htmlFor="name" className="fw-lighter fs-6">
            your Email Id *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="abc@gmail.com"
            className="w-100"
            ref={email}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-group col-12 my-3">
          <label htmlFor="name" className="fw-lighter fs-6">
            Your Message *
          </label>
          <textarea
            name="message"
            className="w-100"
            required
            ref={message}
          ></textarea>
        </div>
      </div>
      <div className="row my-3">
        <button type="submit" className="w-auto m-auto">
          <span>Send</span>
          <FontAwesomeIcon className="mx-2" icon={faRocket} />
        </button>
      </div>
      <Toaster />
    </form>
  );
};
