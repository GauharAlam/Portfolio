export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted font-body">
          © {new Date().getFullYear()} Gauhar Alam. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/GauharAlam" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-fg font-body link-underline transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gauhar-alam/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-fg font-body link-underline transition-colors">
            LinkedIn
          </a>
          <a href="mailto:gauhar54995@gmail.com" className="text-sm text-muted hover:text-fg font-body link-underline transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
