import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string };
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { label: string; children: ReactNode };

const fieldClasses =
  'w-full bg-white border border-line rounded-md px-4 py-3 text-ink placeholder:text-ink3 ' +
  'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors';

const labelClasses =
  'block text-[11px] font-bold tracking-micro uppercase text-ink2 mb-2';

export function Input({ label, id, name, required, ...rest }: InputProps) {
  const fieldId = id ?? name ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label htmlFor={fieldId} className={labelClasses}>
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </label>
      <input id={fieldId} name={name ?? fieldId} required={required} className={fieldClasses} {...rest} />
    </div>
  );
}

export function Textarea({ label, id, name, required, rows = 5, ...rest }: TextareaProps) {
  const fieldId = id ?? name ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label htmlFor={fieldId} className={labelClasses}>
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </label>
      <textarea id={fieldId} name={name ?? fieldId} required={required} rows={rows} className={fieldClasses} {...rest} />
    </div>
  );
}

export function Select({ label, id, name, required, children, ...rest }: SelectProps) {
  const fieldId = id ?? name ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label htmlFor={fieldId} className={labelClasses}>
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </label>
      <select id={fieldId} name={name ?? fieldId} required={required} className={fieldClasses} {...rest}>
        {children}
      </select>
    </div>
  );
}
