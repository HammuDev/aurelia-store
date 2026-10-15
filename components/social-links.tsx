'use client'

import { SOCIAL } from '@/lib/config'
import type { ReactNode } from 'react'

type Social = { name: string; url: string; label: string; icon: ReactNode }

const Instagram = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" /></svg>
const Facebook = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current"><path d="M13.5 21v-8h2.75l.5-3h-3.25V8.05c0-.87.29-1.55 1.62-1.55h1.73V3.82c-.3-.04-1.33-.13-2.52-.13-2.49 0-4.2 1.52-4.2 4.31V10H7.5v3h2.63v8h3.37Z" /></svg>
const TikTok = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current"><path d="M14.6 3h3.02c.2 1.37.9 2.38 2.38 2.98v3.1c-1.25-.04-2.32-.39-3.3-1v6.4c0 3.85-2.55 6.25-5.72 6.25A5.98 5.98 0 0 1 5 14.8c0-3.36 2.65-5.98 5.98-5.98.4 0 .8.04 1.17.12v3.2a2.9 2.9 0 1 0 1.9 2.72V3h.55Z" /></svg>
const YouTube = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current"><path d="M21.58 7.19a2.9 2.9 0 0 0-2.04-2.05C17.74 4.65 12 4.65 12 4.65s-5.74 0-7.54.49a2.9 2.9 0 0 0-2.04 2.05A30 30 0 0 0 1.93 12a30 30 0 0 0 .49 4.81 2.9 2.9 0 0 0 2.04 2.05c1.8.49 7.54.49 7.54.49s5.74 0 7.54-.49a2.9 2.9 0 0 0 2.04-2.05A30 30 0 0 0 22.07 12a30 30 0 0 0-.49-4.81ZM9.95 15.2V8.8L15.5 12l-5.55 3.2Z" /></svg>
const WhatsApp = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2"><path d="M20.1 3.9A11.36 11.36 0 0 0 12 0a11.5 11.5 0 0 0-9.98 17.25L.5 23.5l6.4-1.5A11.5 11.5 0 0 0 20.1 3.9Z" /><path d="M8.2 6.8c.25-.3.55-.3.8-.05l1.1 1.3c.2.25.2.5.05.75l-.5.7c.7 1.4 1.8 2.5 3.2 3.2l.7-.5c.25-.15.5-.15.75.05l1.3 1.1c.25.25.25.55-.05.8-.55.6-1.3.9-2.1.75-3.3-.65-6.5-3.85-7.15-7.15-.15-.8.15-1.55.75-2.1Z" /></svg>

export function SocialLinks({ className = '', showHandle = false }: { className?: string; showHandle?: boolean }) {
  const socials: Social[] = [
    { name: 'Instagram', url: SOCIAL.instagram, label: 'Aurelia on Instagram', icon: <Instagram /> },
    { name: 'Facebook', url: SOCIAL.facebook, label: 'Aurelia on Facebook', icon: <Facebook /> },
    { name: 'TikTok', url: SOCIAL.tiktok, label: 'Aurelia on TikTok', icon: <TikTok /> },
    { name: 'YouTube', url: SOCIAL.youtube, label: 'Aurelia on YouTube', icon: <YouTube /> },
    { name: 'WhatsApp', url: SOCIAL.whatsapp, label: 'Aurelia on WhatsApp', icon: <WhatsApp /> },
  ].filter((social) => Boolean(social.url))

  return <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    {socials.map((social) => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="group flex size-11 items-center justify-center rounded-full border border-current/20 transition hover:-translate-y-0.5 hover:border-gold hover:text-gold hover:shadow-md"><span className="transition-transform group-hover:scale-110">{social.icon}</span>{showHandle && social.name === 'Instagram' && <span className="sr-only">@aurelia.pk</span>}</a>)}
    {showHandle && <span className="text-sm text-current/70">@aurelia.pk</span>}
  </div>
}

export { Instagram }
