'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import sendEmail from '../../pages/api/sendEmail';
import toast from 'react-hot-toast';

interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  component?: 'input' | 'textarea';
  rows?: number;
}

const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    id: 'message',
    name: 'message',
    label: 'Message',
    type: 'text',
    placeholder: 'Enter your message',
    required: true,
    component: 'textarea',
    rows: 4,
  },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormSubmitting(true);

    console.log('Form submitted:', formData);

    // Call the server action to send the email
    let formCompletion = await sendEmail(formData);

    if (formCompletion.success) {
      setFormSubmitted(true);
    } else {
      toast('Form submission failed.');
    }

    setFormSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (formSubmitted) {
    return (
      <div className="text-center">Contact request submitted. Thank you!</div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      {formFields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-neutral-12"
          >
            {field.label}
          </label>
          {field.component === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              rows={field.rows}
              placeholder={field.placeholder}
              className="w-full rounded-lg border-2 border-neutral-4 bg-transparent px-4 py-2 transition-colors focus:border-blue-9 focus:outline-none"
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full rounded-lg border-2 border-neutral-4 bg-transparent px-4 py-2 transition-colors focus:border-blue-9 focus:outline-none"
              required={field.required}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={formSubmitting}
        className={`w-full rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors ${formSubmitting ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-9 hover:bg-blue-8'}`}
      >
        {formSubmitting ? 'Submitting...' : 'Send Message'}
      </button>
    </form>
  );
}
