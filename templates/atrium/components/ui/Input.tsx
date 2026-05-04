import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

const fieldClasses =
  'w-full bg-surface border border-line rounded-md px-4 py-3 text-ink placeholder:text-ink3 ' +
  'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors';

export function Input({ label, id, name, required, ...rest }: InputProps) {
  const fieldId = id ?? name ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-ink mb-2">
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
      <label htmlFor={fieldId} className="block text-sm font-semibold text-ink mb-2">
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </label>
      <textarea id={fieldId} name={name ?? fieldId} required={required} rows={rows} className={fieldClasses} {...rest} />
    </div>
  );
}
