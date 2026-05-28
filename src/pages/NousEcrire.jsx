import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import Icon from '../components/Icon'
import { useLang } from '../i18n/useLang'
import { CONTACT_EMAIL } from '../i18n/translations'

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function NousEcrire() {
  const { t } = useLang()
  const tr = t.ecrire
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: tr.subjects[0],
    message: '',
  })

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
      return
    }
    const subject = `[${form.subject}] ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  const fieldClass = (k) =>
    `mt-1 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-pa-green/20 ${
      errors[k] ? 'border-pa-red focus:border-pa-red' : 'border-black/10 focus:border-pa-green'
    }`

  return (
    <>
      <PageBanner title={t.nav.ecrire} crumb={t.nav.ecrire} subtitle={tr.subtitle} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold">{tr.heading}</h2>
            <p className="mt-3 text-pa-gray">{tr.lead}</p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-pa-green/10 text-pa-green">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{tr.addressLabel}</p>
                  <p className="text-sm text-pa-gray">{tr.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-pa-green/10 text-pa-green">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{tr.emailLabel}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-pa-gray hover:text-pa-green">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-pa-green/10 text-pa-green">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{tr.phoneLabel}</p>
                  <p className="text-sm text-pa-gray">{tr.phone}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-pa-green/30 bg-pa-green/5 p-10 text-center">
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
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold">{tr.fName}</span>
                    <input
                      value={form.name}
                      onChange={update('name')}
                      className={fieldClass('name')}
                      placeholder={tr.fNamePh}
                    />
                    {errors.name && <span className="mt-1 block text-xs text-pa-red">{errors.name}</span>}
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold">{tr.fEmail}</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className={fieldClass('email')}
                      placeholder={tr.fEmailPh}
                    />
                    {errors.email && <span className="mt-1 block text-xs text-pa-red">{errors.email}</span>}
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="text-sm font-semibold">{tr.fSubject}</span>
                  <select
                    value={form.subject}
                    onChange={update('subject')}
                    className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-pa-green focus:ring-2 focus:ring-pa-green/20"
                  >
                    {tr.subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="mt-5 block">
                  <span className="text-sm font-semibold">{tr.fMessage}</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className={fieldClass('message')}
                    placeholder={tr.fMessagePh}
                  />
                  {errors.message && <span className="mt-1 block text-xs text-pa-red">{errors.message}</span>}
                </label>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
                >
                  {tr.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
