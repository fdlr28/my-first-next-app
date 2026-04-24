'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-7xl font-bold mb-6">Halo, saya Fadhlan </h1>
        <p className="text-3xl mb-10 text-zinc-400">
          Belajar FPV Drone, Robotics &amp; Web Development
        </p>
        <button 
          onClick={() => alert('Project sedang dalam pengembangan!')}
          className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Lihat Projects Saya →
        </button>
      </div>
    </div>
  );
}