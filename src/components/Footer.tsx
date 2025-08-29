export default function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 backdrop-blur-lg py-6 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Harshit Kumar. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-3">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          className="hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          className="hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="mailto:harshitkumar2045@gmail.com"
          className="hover:text-white"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
