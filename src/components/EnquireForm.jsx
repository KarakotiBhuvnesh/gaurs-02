import { useState } from "react";

const GSHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxi3eMVQgPB9oTbw3X_-HHxAsG_hnV_nu7J01o3VV2Ej6hxykO9Nv0OWqNKnOn1k6Rd/exec";

const EnquireForm = () => {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const params = new URLSearchParams({
      ...form,
      source: "enquiry_form",
    });

    const res = await fetch(GSHEET_ENDPOINT, {
      method: "POST",
      body: params,
    });

    const text = await res.text();
    console.log("Apps Script response:", res.status, text);

    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "" });
  } catch (err) {
    console.error("Submit error:", err);
    setStatus("error");
  }
};





  return (
    <section id="enquire" className="bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Enquire Now
          </h2>
          <p className="mt-2 text-slate-300 text-sm md:text-base">
            Share your details and we will reach out with project information and pricing.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/80 backdrop-blur rounded-2xl shadow-xl border border-slate-700 p-6 md:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1.5">
                Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-slate-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1.5">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-slate-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1.5">
                Phone
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-slate-500"
                placeholder="Contact number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200 mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-slate-500 resize-none"
              placeholder="Tell us what you are looking for…"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Enquiry"}
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-500">
                Thank you! Check your phone or email shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500">
                Could not submit. Please try again.
              </p>
            )}

          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquireForm;
