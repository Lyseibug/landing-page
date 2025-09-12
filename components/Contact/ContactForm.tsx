"use client";

import { useState } from "react";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subscribe: z.boolean().optional(),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;
type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setErrors({});

    const parsed = ContactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: ContactFormErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace this with your submission logic (API call, email service, etc.)
      // For now, we just simulate a short delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsSubmitted(true);
      setValues({ name: "", email: "", message: "", subscribe: false });
    } catch (error) {
      // Optionally handle submission errors
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-10" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name) || undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@gmail.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email) || undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          placeholder="Hello!"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message) || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          id="subscribe"
          name="subscribe"
          type="checkbox"
          checked={Boolean(values.subscribe)}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="subscribe" className="text-sm text-slate-700">
          Subscribe to Newsletter
        </label>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-indigo-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 disabled:opacity-70 md:w-auto md:px-10 md:py-4"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
        {isSubmitted && (
          <p className="text-sm text-green-700">Message sent successfully.</p>
        )}
      </div>
    </form>
  );
}
