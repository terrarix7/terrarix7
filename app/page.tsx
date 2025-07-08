import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

const products = [
  {
    url: "https://xfastr.com",
    domain: "xfastr.com",
    description: "Grow on X faster via analyzing content with AI.",
  },
  {
    url: "https://j.terrarix.com",
    domain: "j.terrarix.com",
    description: "A simple journal application.",
  },
  {
    url: "https://listener.terrarix.com",
    domain: "listener.terrarix.com",
    description: "Hear the text being read.",
  },
  {
    url: "https://prodebater.com",
    domain: "prodebater.com",
    description: "Learn the art of debating, with ofc AI.",
  },
];

const otherWork = [
  {
    url: "https://chromewebstore.google.com/detail/mdfnhhkkgchnbddmiacffdkchbpcibll?utm_source=item-share-cb",
    domain: "History Visualiser",
    description: "Track your social media usage and browsing habits locally.",
  },
];

export default function Home() {
  return (
    <div className="min-h-[100dvh] p-8 pb-20 gap-16 sm:p-20">
      <header className="flex flex-col gap-6 items-center mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold flex flex-col items-center gap-1">
          <span className="text-gray-400 font-normal text-2xl sm:text-4xl">
            @
            <span className="relative inline-block">
              <div className="absolute inset-0 bg-white transform -rotate-2 -z-10"></div>
              <span className="font-bold text-black relative z-10">terra</span>
            </span>
            rix7
          </span>
        </h1>

        <p className="text-xl text-center max-w-3xl">
          I build stuff. Always happy to talk to new people—hit me up at{" "}
          <a
            href="https://discord.com/users/1362811721911111913"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            discord
          </a>{" "}
          or on{" "}
          <a
            href="https://twitter.com/terrarix7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            twitter
          </a>
          .
        </p>

        {/* Social Links - Moved up here */}
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all"
            href="https://discord.com/users/1362811721911111913"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
            Discord
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all"
            href="https://twitter.com/terrarix7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
            Twitter
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all"
            href="https://instagram.com/terrarix7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all"
            href="https://youtube.com/@terrarix7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
            YouTube
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all"
            href="https://github.com/terrarix7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </header>

      <main className="pt-24 md:pt-40 max-w-3xl mx-auto w-full">
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-8 text-center">My Art</h2>
          <div className="flex flex-col">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col md:grid md:grid-cols-[1fr_2fr] md:gap-8 gap-2 py-1"
              >
                <div className="flex justify-center md:justify-start hover:underline underline-offset-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-300"
                    href={product.url}
                  >
                    {product.domain}
                  </a>
                </div>
                <div className="text-gray-400 text-center md:text-right">
                  {product.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Other Work</h2>
          <div className="flex flex-col">
            {otherWork.map((work, index) => (
              <div
                key={index}
                className="flex flex-col md:grid md:grid-cols-[1fr_2fr] md:gap-8 gap-2 py-1"
              >
                <div className="flex justify-center md:justify-start">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-300 hover:underline hover:underline-offset-4"
                    href={work.url}
                  >
                    {work.domain}
                  </a>
                </div>
                <div className="text-gray-400 text-center md:text-right">
                  {work.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
