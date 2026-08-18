export type Contact = {
  label: string;
  href: string;
};

/**
 * A simple vertical list of contact links (email, socials, etc.).
 */
export default function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-0 lg:pl-24">
      {contacts.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="font-sans text-[0.6875rem] text-accent"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
