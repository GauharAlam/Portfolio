import { useState } from 'react'
import FadeUp from '../components/FadeUp'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      // Using Web3Forms / Formspree free form submission endpoint (No database required)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Users can add their free key, or it falls back gracefully to mailto
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
        setForm({ name: '', email: '', message: '' })
      } else {
        // Fallback: Open mailto link if form service isn't configured
        window.location.href = `mailto:gauhar54995@gmail.com?subject=Contact from ${encodeURIComponent(
          form.name
        )}&body=${encodeURIComponent(form.message)}`
        setStatus({ type: 'success', message: 'Opening your mail app to send the message...' })
        setForm({ name: '', email: '', message: '' })
      }
    } catch (err) {
      // Direct mailto fallback
      window.location.href = `mailto:gauhar54995@gmail.com?subject=Contact from ${encodeURIComponent(
        form.name
      )}&body=${encodeURIComponent(form.message)}`
      setStatus({ type: 'success', message: 'Opening your mail app...' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto min-h-screen">
      <FadeUp>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-16">
          Contact
        </h1>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Contact Links */}
        <FadeUp delay={0.1}>
          <div>
            <h2 className="font-heading text-xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted text-sm font-body mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out through any of
              these channels or send a message directly.
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted font-body uppercase tracking-[0.15em] block mb-1">
                  Email
                </span>
                <a
                  href="mailto:gauhar54995@gmail.com"
                  className="link-underline text-fg text-sm font-body"
                >
                  gauhar54995@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs text-muted font-body uppercase tracking-[0.15em] block mb-1">
                  GitHub
                </span>
                <a
                  href="https://github.com/GauharAlam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg text-sm font-body"
                >
                  github.com/GauharAlam
                </a>
              </div>
              <div>
                <span className="text-xs text-muted font-body uppercase tracking-[0.15em] block mb-1">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/gauhar-alam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg text-sm font-body"
                >
                  linkedin.com/in/gauhar-alam
                </a>
              </div>
              <div>
                <span className="text-xs text-muted font-body uppercase tracking-[0.15em] block mb-1">
                  X (Twitter)
                </span>
                <a
                  href="https://x.com/NawazCodex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg text-sm font-body"
                >
                  x.com/NawazCodex
                </a>
              </div>
              <div>
                <span className="text-xs text-muted font-body uppercase tracking-[0.15em] block mb-1">
                  Phone
                </span>
                <a href="tel:+918409153351" className="link-underline text-fg text-sm font-body">
                  +91 8409153351
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right: Contact Form */}
        <FadeUp delay={0.2}>
          <div>
            {status.message && (
              <div
                className={`mb-6 p-4 border text-sm font-body ${
                  status.type === 'error' ? 'border-border-subtle text-muted' : 'border-fg text-fg'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="input-outline"
                autoComplete="name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="input-outline"
                autoComplete="email"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
                className="input-outline"
              />
              <div>
                <button type="submit" className="btn-outline" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}
