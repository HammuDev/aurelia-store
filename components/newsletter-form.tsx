'use client'

import { Check, LoaderCircle, Mail, ArrowRight } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError('Enter a valid email address.'); return }
    setError(''); setStatus('loading')
    // TODO: POST to /api/newsletter (Supabase/Resend)
    window.setTimeout(() => { setStatus('success'); setEmail('') }, 650)
  }
  const muted = dark ? 'text-white/65' : 'text-charcoal/60'
  if (status === 'success') return <div className={`rounded-xl border p-6 ${dark ? 'border-white/25 text-white' : 'border-gold/50 text-charcoal'}`} role="status"><div className="flex items-center gap-3 font-medium"><span className="flex size-8 items-center justify-center rounded-full bg-gold text-white"><Check className="size-4" /></span>Thank you, you&apos;re on the list</div><p className={`mt-3 text-sm ${muted}`}>No spam. Unsubscribe anytime.</p></div>
  return <div className={dark ? 'text-white' : 'text-charcoal'}><h2 className="font-serif text-3xl">Join the Aurelia circle</h2><p className={`mt-3 text-sm leading-6 ${muted}`}>Get 10% off your first order, plus early access to Eid and new arrivals.</p><form onSubmit={submit} noValidate className={`mt-6 flex flex-col gap-1 rounded-xl border p-1 md:block ${dark ? 'border-white/30' : 'border-charcoal/25'}`}><div className="flex min-h-12 items-center gap-3 px-3"><Mail aria-hidden="true" className={`size-5 shrink-0 ${muted}`} /><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" name="email" type="email" required value={email} onChange={event => { setEmail(event.target.value); setError('') }} placeholder="Enter your email address" className={`min-w-0 flex-1 bg-transparent text-base outline-none ${dark ? 'placeholder:text-white/45' : 'placeholder:text-charcoal/45'}`} /></div><button type="submit" disabled={status === 'loading'} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-charcoal px-5 text-sm text-white transition hover:bg-charcoal/90 disabled:cursor-wait md:w-auto md:float-right md:-mt-12">{status === 'loading' ? <><LoaderCircle className="size-4 animate-spin" />Subscribing</> : <>Subscribe <ArrowRight className="size-4" /></>}</button></form>{error && <p role="alert" className="mt-2 text-sm text-red-600">{error}</p>}<p className={`mt-3 text-xs ${muted}`}>No spam. Unsubscribe anytime.</p></div>
}
