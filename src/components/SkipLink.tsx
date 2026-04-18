/**
 * Hidden from sighted mouse users, but the first Tab-focused element.
 * When activated, it jumps keyboard focus past the navbar straight to <main>.
 * WCAG 2.4.1 (Bypass Blocks, Level A) — required pattern.
 *
 * Uses the `.skip-link` class defined in index.css — this is more reliable
 * than Tailwind's sr-only/not-sr-only pair when both are in scope.
 */
export default function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to content
    </a>
  );
}
