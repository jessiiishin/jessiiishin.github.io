/**
 * Full-bleed footer bar. Render outside the page's padded container
 * so it spans the full viewport width.
 */
export default function Footer() {
  return (
    <footer className="flex h-24 items-center justify-center bg-primary">
      <p className="font-sans text-lg font-medium text-background lg:text-2xl">
        made with love by jessi
      </p>
    </footer>
  );
}
