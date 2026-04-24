export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">Fadhlan.dev</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/projects" className="hover:text-blue-400">Projects</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-7xl font-bold mb-6">Halo, saya Fadhlan 👋</h1>
          <p className="text-3xl mb-10 text-zinc-400">
            Belajar FPV Drone, Robotics & Web Development
          </p>
          <button 
            onClick={() => window.location.href = '/projects'}
            className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Lihat Projects Saya →
          </button>
        </div>
      </div>
    </div>
  );
}