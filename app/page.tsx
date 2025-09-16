import Image from "next/image";

export default function Home() {
 return(
  <div>
    Welcome to Rk-Home Planner!
    <Image
      className="dark:invert"
      src="/next.svg"
      alt="Next.js logo"
      width={180}
      height={38}
      priority
    />
  </div>
 );
}
