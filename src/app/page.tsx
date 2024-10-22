import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href={'/with-next-image'}>Using Next Image (By Default Lazy loaded)</Link>
      <Link href={'/with-next-image-without-lazy'}>Using Next Image (without Lazy load)</Link>
      <Link href={'/without-next-image'}>Without Using Next Image (without lazy load)</Link>
      <Link href={'/without-next-image-with-lazy'}>Without Using Next Image (with lazy load)</Link>
    </div>
  );
}
