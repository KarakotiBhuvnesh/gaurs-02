import { useState } from "react";

const GSHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxi3eMVQgPB9oTbw3X_-HHxAsG_hnV_nu7J01o3VV2Ej6hxykO9Nv0OWqNKnOn1k6Rd/exec";

const MiddleForm = () => {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
      source: "middle_form",
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
    <section id="middle-form" className="py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white/95 rounded-2xl shadow-md border border-slate-200 px-5 py-6 md:px-8 md:py-7">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-1">
            Get Project Details
          </h2>
          <p className="text-sm text-slate-500 mb-5">
            Share your contact and we&apos;ll send you brochure, pricing and layout.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Name"
              />
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Email"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Phone"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {status === "loading" ? "Submitting..." : "Send Details"}
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
      </div>
    </section>
  );
};

export default MiddleForm;
