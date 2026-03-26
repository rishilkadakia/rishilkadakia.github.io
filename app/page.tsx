import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Rishil Kadakia
        </h1>

        <p className="text-xl mb-6">
          Computer Science student at the University of Illinois Urbana-Champaign on the Pre-Med track,
          interested in using computer science and engineering to problem-solve within the healthcare industry.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/rishilkadakia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rishil-kadakia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}