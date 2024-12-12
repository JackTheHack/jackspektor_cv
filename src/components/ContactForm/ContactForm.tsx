'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

interface FormField {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
  required?: boolean
  component?: 'input' | 'textarea'
  rows?: number
}

const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    id: 'message',
    name: 'message',
    label: 'Message',
    type: 'text',
    placeholder: 'Enter your message',
    required: true,
    component: 'textarea',
    rows: 4
  }
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {formFields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label htmlFor={field.id} className="block text-sm font-medium text-neutral-12">
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
              className="w-full px-4 py-2 border-2 border-neutral-4 rounded-lg bg-transparent focus:outline-none focus:border-blue-9 transition-colors"
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
              className="w-full px-4 py-2 border-2 border-neutral-4 rounded-lg bg-transparent focus:outline-none focus:border-blue-9 transition-colors"
              required={field.required}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-9 rounded-lg hover:bg-blue-8 transition-colors"
      >
        Send Message
      </button>
    </form>
  )
} 