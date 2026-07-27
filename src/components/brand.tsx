import Link from "next/link";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`brand ${footer ? "brand--footer" : ""}`} href="/" aria-label="Flyttiva startsida">
      <span className="brand__mark" aria-hidden="true">F</span>
      <span className="brand__copy">
        <strong>Flyttiva</strong>
        <small>Moving, considered.</small>
      </span>
    </Link>
  );
}
