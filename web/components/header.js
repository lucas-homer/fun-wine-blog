import Link from "next/link";
import TextLogo from "./text-logo";

export default function Header() {
  return (
    <div className="mb-20 mt-8 ">
      <Link href="/" passHref={true}>
        <TextLogo height="100" className="mx-auto" />
      </Link>
    </div>
  );
}
