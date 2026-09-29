import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Icon from '../components/Icon'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  MAPS_SEARCH_HREF,
  WHATSAPP_HREF,
} from '../i18n/translations'

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const FIELDS = ['name', 'email', 'message']

export default function NousEcrire() {
  const { t, withLang } = useLang()
  const tr = t.ecrire
  usePageMeta()
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: tr.subjects[0],
    message: '',
  })
  const refs = { name: useRef(null), email: useRef(null), message: useRef(null) }

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = tr.errName
    if (!isEmail(form.email)) er.email = tr.errEmail
    if (!form.message.trim()) er.message = tr.errMessage
    return er
  }

  const submit = (e) => {
    e.preventDefault()
    const er = validate()
    if (Object.keys(er).length) {
      setErrors(er)
      refs[FIELDS.find((f) => er[f])].current?.focus()
      return
    }
    const subject = `[${form.subject}] ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldProps = (k) => ({
    id: `contact-${k}`,
    name: k,
    ref: refs[k],
    value: form[k],
    onChange: update(k),
    required: true,
    'aria-required': 'true',
    'aria-invalid': errors[k] ? 'true' : undefined,
    'aria-describedby': errors[k] ? `contact-${k}-error` : undefined,
    className: `mt-1 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-pa-green/30 ${
      errors[k] ? 'border-pa-red focus:border-pa-red' : 'border-black/25 focus:border-pa-green'
    }`,
  })

  const label = (k, children) => (
    <label htmlFor={`contact-${k}`} className="text-sm font-semibold">
      {children} <span aria-hidden="true" className="text-pa-red">*</span>
    </label>
  )

  const error = (k) =>
    errors[k] ? (
      <p id={`contact-${k}-error`} className="mt-1 text-xs font-medium text-pa-red">
        {errors[k]}
      </p>
    ) : null

  const hasErrors = Object.values(errors).some(Boolean)
  const newTab = <span className="sr-only"> {t.common.newTab}</span>

  return (
    <>
      <PageBanner title={t.nav.ecrire} crumb={t.nav.ecrire} subtitle={tr.subtitle} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold">{tr.heading}</h2>
            <p className="mt-3 text-pa-gray">{tr.lead}</p>
            <ul className="mt-8 space-y-5">
              {[
                { icon: 'pin', label: tr.addressLabel, href: MAPS_SEARCH_HREF, text: CONTACT_ADDRESS, ext: true },
                { icon: 'mail', label: tr.emailLabel, href: `mailto:${CONTACT_EMAIL}`, text: CONTACT_EMAIL },
                { icon: 'phone', label: tr.phoneLabel, href: `tel:${CONTACT_PHONE_HREF}`, text: CONTACT_PHONE },
                { icon: 'whatsapp', label: tr.whatsappLabel, href: WHATSAPP_HREF, text: CONTACT_PHONE, ext: true },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pa-green/10 text-pa-green">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{c.label}</p>
                    <a
                      href={c.href}
                      {...(c.ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="text-sm text-pa-gray hover:text-pa-green hover:underline"
                    >
                      {c.text}
                      {c.ext && newTab}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div
                role="status"
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-pa-green/30 bg-pa-green/5 p-10 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pa-green text-white">
                  <Icon name="check" className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{tr.sentTitle}</h3>
                <p className="mt-2 text-pa-gray">
                  {tr.sentText}{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pa-green">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false)
                    setForm({ name: '', email: '', subject: tr.subjects[0], message: '' })
                  }}
                  className="mt-6 rounded-md border border-pa-green px-5 py-2 text-sm font-semibold text-pa-green hover:bg-pa-green hover:text-white"
                >
                  {tr.again}
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                aria-labelledby="contact-form-title"
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 id="contact-form-title" className="sr-only">
                  {tr.heading}
                </h2>
                <p className="mb-5 text-xs text-pa-gray">{tr.required}</p>
                {hasErrors && (
                  <p role="alert" className="mb-5 rounded-lg bg-pa-red/10 px-4 py-3 text-sm font-medium text-pa-red">
                    {tr.errSummary}
                  </p>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    {label('name', tr.fName)}
                    <input type="text" autoComplete="name" placeholder={tr.fNamePh} {...fieldProps('name')} />
                    {error('name')}
                  </div>
                  <div>
                    {label('email', tr.fEmail)}
                    <input
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder={tr.fEmailPh}
                      {...fieldProps('email')}
                    />
                    {error('email')}
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="contact-subject" className="text-sm font-semibold">
                    {tr.fSubject}
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={update('subject')}
                    className="mt-1 w-full rounded-lg border border-black/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-pa-green focus:ring-2 focus:ring-pa-green/30"
                  >
                    {tr.subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-5">
                  {label('message', tr.fMessage)}
                  <textarea rows={5} placeholder={tr.fMessagePh} {...fieldProps('message')} />
                  {error('message')}
                </div>
                <button
                  type="submit"
                  aria-describedby="contact-send-hint"
                  className="mt-6 w-full rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
                >
                  {tr.send}
                </button>
                <p id="contact-send-hint" className="mt-3 text-xs text-pa-gray">
                  {tr.sendHint}
                </p>
                <p className="mt-1 text-xs text-pa-gray">
                  {tr.privacyNote}{' '}
                  <Link to={withLang('/politique-de-confidentialite')} className="font-semibold text-pa-green underline">
                    {tr.privacyLink}
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
