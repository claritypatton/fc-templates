import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';

/**
 * ContactPanel — primary contact section.
 *
 * Two-column layout: form on the left, sidebar with phone/email/address/
 * hours and (optionally) a service-area block on the right.
 *
 * Form note: this is a static template, so the form posts to `mailto:` as a
 * graceful fallback. Production deployments typically wire this to a form
 * endpoint (Resend, Formspree, etc.) — that wiring lives at the deploy layer,
 * not in the template.
 */
export function ContactPanel() {
  const { contact, meta } = siteConfig;
  const { details, serviceArea } = contact;

  return (
    <section className="bg-bg py-20 md:py-24" aria-label="Contact">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight mb-3 tracking-tight">
              {contact.formHeadline}
            </h2>
            {contact.formSubhead && (
              <p className="text-ink2 leading-relaxed mb-8">{contact.formSubhead}</p>
            )}

            <form
              action={`mailto:${meta.primaryEmail}`}
              method="post"
              encType="text/plain"
              className="bg-surface border border-line rounded-card p-7 md:p-8 shadow-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Your name" name="name" type="text" required autoComplete="name" />
                <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <Input label="Email" name="email" type="email" required autoComplete="email" />
              <Input label="Pet name & species" name="pet" type="text" placeholder="e.g. Charlie, Labrador mix, 4 yrs" />
              <Textarea label="How can we help?" name="message" required placeholder="Tell us a little about why you’re reaching out…" />
              <div className="pt-2">
                <Button href="#" variant="primary" size="md">
                  Send message
                </Button>
                <p className="text-xs text-ink3 mt-4">
                  We reply within one business day. For urgent concerns, please call{' '}
                  <a href={`tel:${meta.primaryPhone}`} className="text-primary font-semibold underline-offset-2 hover:underline">
                    {meta.primaryPhone}
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-8">
            {/* Address & contact */}
            <div className="bg-surface2 border border-line rounded-card p-7">
              <h3 className="font-display text-lg font-semibold text-primary mb-4">Visit or Call</h3>
              <address className="not-italic text-ink2 leading-relaxed mb-4">
                {details.address.line1}<br />
                {details.address.line2}
              </address>
              <div className="space-y-1.5">
                <a href={`tel:${details.phone}`} className="block text-ink hover:text-accent transition-colors font-semibold">
                  {details.phone}
                </a>
                <a href={`mailto:${details.email}`} className="block text-ink2 hover:text-accent transition-colors text-sm">
                  {details.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-surface2 border border-line rounded-card p-7">
              <h3 className="font-display text-lg font-semibold text-primary mb-4">Hours</h3>
              <dl className="space-y-2">
                {details.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 text-sm">
                    <dt className="text-ink2">{h.day}</dt>
                    <dd className="text-ink font-medium">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Service area */}
            {serviceArea && (
              <div className="bg-surface2 border border-line rounded-card p-7">
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{serviceArea.headline}</h3>
                <p className="text-sm text-ink2 leading-relaxed mb-4">{serviceArea.body}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {serviceArea.areas.map((area) => (
                    <li key={area} className="text-xs px-3 py-1 bg-surface border border-line rounded-pill text-ink2">
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
