"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";

type ImportRequest = {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  make: string;
  model: string;
  minimumYear: string;
  maximumBudget: string;
  fuel: string;
  transmission: string;
  colour: string;
  notes: string;
  status: "new";
  createdAt: string;
};

const initialForm = {
  customerName: "",
  phone: "",
  email: "",
  make: "",
  model: "",
  minimumYear: "",
  maximumBudget: "",
  fuel: "",
  transmission: "",
  colour: "",
  notes: "",
};

export function ImportRequestForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(
    field: keyof typeof initialForm,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const request: ImportRequest = {
      id: crypto.randomUUID(),
      ...form,
      phone: form.phone.trim(),
      status: "new",
      createdAt: new Date().toISOString(),
    };

    const existingRequests = JSON.parse(
      localStorage.getItem("vehicle-import-requests") || "[]",
    ) as ImportRequest[];

    localStorage.setItem(
      "vehicle-import-requests",
      JSON.stringify([request, ...existingRequests]),
    );

    setForm(initialForm);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 size={34} />
        </div>

        <h2 className="mt-6 text-3xl font-black text-slate-950">
          Request submitted
        </h2>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
          Your vehicle requirements have been recorded. Our team will
          contact you to discuss available options and estimated costs.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="rounded-xl bg-cyan-600 px-6 py-3 font-bold text-white hover:bg-cyan-700"
          >
            Submit another request
          </button>

          <Link
            href="/vehicles"
            className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-700 hover:border-cyan-500"
          >
            Browse vehicles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name" required>
          <input
            required
            value={form.customerName}
            onChange={(event) =>
              updateField("customerName", event.target.value)
            }
            className="form-input"
            placeholder="Your full name"
          />
        </FormField>

        <FormField label="WhatsApp number" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) =>
              updateField("phone", event.target.value)
            }
            className="form-input"
            placeholder="+263 77 123 4567"
          />
        </FormField>

        <FormField label="Email address">
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            className="form-input"
            placeholder="name@example.com"
          />
        </FormField>

        <FormField label="Preferred make" required>
          <input
            required
            value={form.make}
            onChange={(event) =>
              updateField("make", event.target.value)
            }
            className="form-input"
            placeholder="Toyota"
          />
        </FormField>

        <FormField label="Preferred model" required>
          <input
            required
            value={form.model}
            onChange={(event) =>
              updateField("model", event.target.value)
            }
            className="form-input"
            placeholder="RAV4"
          />
        </FormField>

        <FormField label="Minimum year" required>
          <input
            required
            type="number"
            min="2000"
            max={new Date().getFullYear() + 1}
            value={form.minimumYear}
            onChange={(event) =>
              updateField("minimumYear", event.target.value)
            }
            className="form-input"
            placeholder="2020"
          />
        </FormField>

        <FormField label="Maximum budget (USD)" required>
          <input
            required
            type="number"
            min="1000"
            value={form.maximumBudget}
            onChange={(event) =>
              updateField("maximumBudget", event.target.value)
            }
            className="form-input"
            placeholder="15000"
          />
        </FormField>

        <FormField label="Fuel type">
          <select
            value={form.fuel}
            onChange={(event) =>
              updateField("fuel", event.target.value)
            }
            className="form-input"
          >
            <option value="">Any fuel type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </FormField>

        <FormField label="Transmission">
          <select
            value={form.transmission}
            onChange={(event) =>
              updateField("transmission", event.target.value)
            }
            className="form-input"
          >
            <option value="">Any transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </FormField>

        <FormField label="Preferred colour">
          <input
            value={form.colour}
            onChange={(event) =>
              updateField("colour", event.target.value)
            }
            className="form-input"
            placeholder="White, silver or black"
          />
        </FormField>
      </div>

      <FormField label="Additional requirements">
        <textarea
          rows={5}
          value={form.notes}
          onChange={(event) =>
            updateField("notes", event.target.value)
          }
          className="form-input resize-none"
          placeholder="Describe any additional features or requirements..."
        />
      </FormField>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          required
          type="checkbox"
          className="mt-1 size-4 accent-cyan-600"
        />

        <span>
          I agree to be contacted about this vehicle import request.
        </span>
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-cyan-600 sm:w-auto"
      >
        <Send size={18} aria-hidden="true" />
        Submit import request
      </button>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

function FormField({
  label,
  required,
  children,
}: FormFieldProps) {
  return (
    <label className="mt-5 block first:mt-0">
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-rose-600">*</span>
        )}
      </span>

      {children}
    </label>
  );
}