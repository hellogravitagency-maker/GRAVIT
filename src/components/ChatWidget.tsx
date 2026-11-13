const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.031 2C6.511 2 2.016 6.494 2.016 12.014c0 1.763.459 3.483 1.332 5.001L2 22l5.127-1.344a9.988 9.988 0 004.904 1.272h.004c5.518 0 10.014-4.494 10.014-10.014 0-2.673-1.041-5.187-2.932-7.078A9.933 9.933 0 0012.031 2zm0 18.292c-1.503 0-2.975-.404-4.258-1.168l-.306-.182-3.165.83.844-3.084-.199-.317a8.232 8.232 0 01-1.265-4.357c0-4.57 3.719-8.289 8.289-8.289 2.214 0 4.296.862 5.861 2.428 1.565 1.566 2.427 3.648 2.427 5.862 0 4.571-3.719 8.29-8.288 8.29zm4.542-6.202c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.644.81-.789.976-.145.166-.29.187-.539.062-.249-.125-1.05-.387-2-1.234-.739-.659-1.238-1.473-1.383-1.722-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.419-.56-.427l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.141.163 1.57.099.479-.071 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.291z" />
  </svg>
);

// ponytail: brand-neutral pill instead of the stock green bubble; expands to a label on hover (desktop).
export default function ChatWidget() {
  return (
    <a
      href="https://wa.me/919390009700?text=Hi%20GRAVIT%2C%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GRAVIT on WhatsApp"
      className="group fixed bottom-6 right-6 z-[999] flex items-center h-12 rounded-full bg-surface/80 backdrop-blur-xl border border-border text-primary shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] hover:border-secondary/60 transition-colors"
    >
      <span className="w-12 h-12 grid place-items-center">
        <WhatsAppIcon className="w-5 h-5" />
      </span>
      <span className="hidden md:block max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-[max-width,padding] duration-500 group-hover:max-w-40 group-hover:pr-5">
        Chat with us
      </span>
    </a>
  );
}
