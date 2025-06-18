import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBlog,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-[100dvh] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Top: Name and Description */}
      <header className="flex flex-col gap-4 items-center row-start-1">
        <h1 className="text-4xl sm:text-6xl font-bold flex flex-col items-center gap-1">
          <span className="text-gray-400 font-normal text-2xl sm:text-4xl">
            <span className="font-bold text-white">@terra</span>rix7
          </span>
        </h1>
        <p className="text-xl text-center max-w-xl">
          I build stuff. Always happy to talk to new people—hit me up at{" "}
          <a
            href="https://discord.com/users/1362811721911111913"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            discord
          </a>{" "}
          or on{" "}
          <a
            href="https://twitter.com/terrarix7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            twitter
          </a>
          .
        </p>
      </header>

      {/* Middle: Products */}
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <section className="text-xl text-center w-full">
          <h2 className="text-2xl font-bold mb-2">Products</h2>
          <ul className="flex flex-col gap-2 items-center">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href="https://prodebater.com"
              >
                prodebater.com
              </a>{" "}
              <span className="text-base text-gray-500">– 0$ mrr</span>
              <div className="text-base text-gray-500 mt-1">
                Learn the art of debating, with ofc AI.
              </div>
            </li>
          </ul>
        </section>
      </main>

      {/* Bottom: Social Links */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://discord.com/users/1362811721911111913"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
          Discord
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/terrarix7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
          Twitter
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/terrarix7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://youtube.com/@terrarix7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
          YouTube
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/terrarix7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
      </footer>
    </div>
  );
}
