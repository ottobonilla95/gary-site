import Image from "next/image";
import Link from "next/link";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`brand ${footer ? "brand--footer" : ""}`} href="/" aria-label="Flyttiva startsida">
      <Image src="/images/logo.jpeg" alt="Flyttiva logo" width={56} height={56} priority={!footer} />
      <span className="brand__copy">
        <strong>Flyttiva</strong>
        <small>Enkelt. Tryggt. Flyttat.</small>
      </span>
    </Link>
  );
}
