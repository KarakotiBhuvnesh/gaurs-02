import { useState } from 'react'
export default function EnquireForm() {
  const [form, setForm] = useState({name:'',phone:'',email:'',message:''})
  const [status, setStatus] = useState('')
  const handle = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/backend/submit.php',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(form),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }
  const inputCls = "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
  return (
    <section id="enquire" className="py-24 bg-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">Get In Touch</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-white mb-4">Enquire Now</h2>
        <p className="text-center text-gray-400 mb-12">Please take a moment to fill out the form and our team will get back to you.</p>
        {status === 'success' ? (
          <div className="bg-green-900/40 border border-green-500 rounded-2xl p-10 text-center">
            <p className="text-green-400 text-4xl mb-4">&#10003;</p>
            <h3 className="font-serif text-2xl text-white mb-2">Thank You!</h3>
            <p className="text-gray-400 text-sm">Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-wide mb-1.5 block">Full Name *</label>
              <input name="name" required value={form.name} onChange={handle} placeholder="Your full name" className={inputCls} />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-wide mb-1.5 block">Phone Number *</label>
              <input name="phone" required value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" className={inputCls} />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-wide mb-1.5 block">Email Address *</label>
              <input name="email" type="email" required value={form.email} onChange={handle} placeholder="you@example.com" className={inputCls} />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-wide mb-1.5 block">Message (Optional)</label>
              <textarea name="message" rows={3} value={form.message} onChange={handle} placeholder="Any specific requirements..." className={inputCls + ' resize-none'} />
            </div>
            <button type="submit" disabled={status==='sending'}
              className="w-full bg-gold text-dark font-semibold py-3.5 text-sm tracking-widest hover:bg-yellow-500 transition-colors rounded-lg disabled:opacity-60">
              {status === 'sending' ? 'SENDING...' : 'SUBMIT ENQUIRY'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
