"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("Name") ?? ""),
      company: String(formData.get("Company") ?? ""),
      email: String(formData.get("Email") ?? ""),
      message: String(formData.get("Message") ?? ""),
      honey: String(formData.get("_honey") ?? ""),
      startedAt
    };

    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="_honey" className="hidden-field" tabIndex={-1} autoComplete="off" />

      <label htmlFor="name">Name</label>
      <input id="name" name="Name" type="text" required />

      <label htmlFor="company">Company</label>
      <input id="company" name="Company" type="text" required />

      <label htmlFor="email">Work Email</label>
      <input id="email" name="Email" type="email" required />

      <label htmlFor="message">Current Priority</label>
      <textarea id="message" name="Message" rows={4} required />

      <button className="btn btn-primary" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      {state === "success" && (
        <p className="form-status form-status-success">Thanks. Your inquiry was sent successfully.</p>
      )}
      {state === "error" && (
        <p className="form-status form-status-error">
          Submission failed. Please email <a href="mailto:manuel@rimasanfer.com">manuel@rimasanfer.com</a>.
        </p>
      )}
    </form>
  );
}
