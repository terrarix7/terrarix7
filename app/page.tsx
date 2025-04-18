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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl sm:text-6xl font-bold">@terrarix7</h1>
        <p className="text-xl text-center">
          I build stuff. Always happy to talk to new people hit me up at{" "}
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
        </p>
      </main>
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
