import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';

/**
 * ContactPanel — Mainline edition.
 *
 * Two-column: form on the left, info sidebar on the right. The sidebar leads
 * with a prominent 24/7 emergency-call CTA — the move that turns a generic
 * contact page into a trades-specific one.
 *
 * Form posts to mailto: as a graceful no-config fallback. Production deploys
 * typically wire to Resend / Formspree / Web3Forms — that wiring lives at
 * the deploy layer, not the template.
 */
export function ContactPanel() {
  const { contact, meta } = siteConfig;
  const { details, serviceArea } = contact;

  return (
    <section className="bg-bg py-20 md:py-24" aria-label="Contact">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-ink leading-[1.0] mb-3 tracking-tight">
              {contact.formHeadline}
            </h2>
            {contact.formSubhead && (
              <p className="text-ink2 leading-relaxed mb-8">{contact.formSubhead}</p>
            )}

            <form
              action={`mailto:${meta.primaryEmail}`}
              method="post"
              encType="text/plain"
              className="bg-surface border border-line p-7 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Your name" name="name" type="text" required autoComplete="name" />
                <Input label="Phone" name="phone" type="tel" required autoComplete="tel" />
              </div>
              <Input label="Email" name="email" type="email" required autoComplete="email" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Address" name="address" type="text" autoComplete="street-address" />
                <Select label="Service needed" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Heating — Repair</option>
                  <option>Heating — Replacement</option>
                  <option>Cooling — Repair</option>
                  <option>Cooling — Replacement</option>
                  <option>Indoor Air Quality</option>
                  <option>Maintenance Plan</option>
                  <option>Other</option>
                </Select>
              </div>
              <Textarea
                label="Describe the issue"
                name="message"
                required
                placeholder="What's the system doing? When did it start? Any error codes?"
              />
              <div className="pt-2">
                <Button href="#" variant="primary" size="md">
                  Submit Request
                </Button>
                <p className="text-xs text-ink3 mt-4 leading-relaxed">
                  We respond within 30 minutes during business hours. For after-hours emergencies, please call{' '}
                  <a
                    href={`tel:${meta.primaryPhone}`}
                    className="text-accent font-bold underline-offset-2 hover:underline"
                  >
                    {meta.primaryPhone}
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-5">
            {/* Emergency CTA */}
            <div className="bg-accent text-white p-7">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="block w-2 h-2 rounded-full bg-white animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold tracking-micro uppercase">
                  24/7 Emergency Line
                </span>
              </div>
              <a
                href={`tel:${details.phone}`}
                className="block font-display text-3xl md:text-4xl font-extrabold tracking-tight hover:opacity-90 transition-opacity mb-2"
              >
                {details.phone}
              </a>
              <p className="text-sm text-white/85 leading-relaxed">
                Real dispatcher. Day or night. No phone trees.
              </p>
            </div>

            {/* Address & email */}
            <div className="bg-surface border border-line p-7">
              <h3 className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
                Visit the Shop
              </h3>
              <address className="not-italic text-ink leading-relaxed mb-4 font-medium">
                {details.address.line1}<br />
                {details.address.line2}
              </address>
              <a
                href={`mailto:${details.email}`}
                className="block text-ink2 hover:text-accent transition-colors text-sm"
              >
                {details.email}
              </a>
            </div>

            {/* Hours */}
            <div className="bg-surface border border-line p-7">
              <h3 className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
                Hours
              </h3>
              <dl className="space-y-1.5">
                {details.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 text-sm">
                    <dt className="text-ink2">{h.day}</dt>
                    <dd className="text-ink font-bold">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Service area */}
            {serviceArea && (
              <div className="bg-surface border border-line p-7">
                <h3 className="text-[11px] font-bold tracking-micro uppercase text-accent mb-2">
                  {serviceArea.headline}
                </h3>
                <p className="text-sm text-ink2 leading-relaxed mb-4">{serviceArea.body}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {serviceArea.areas.map((area) => (
                    <li
                      key={area}
                      className="text-[11px] font-bold uppercase tracking-micro px-3 py-1.5 bg-white border border-line text-ink"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </section>
  );
}
