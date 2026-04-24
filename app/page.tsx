export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Halo Dunia! 🚀</h1>
        <p className="text-2xl mb-8">Ini website Next.js pertama saya</p>
        
        <div className="space-x-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition">
            Tombol 1
          </button>
          <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Tombol 2
          </button>
        </div>

        <p className="mt-12 text-gray-500">Deploy otomatis dari GitHub → Vercel</p>
      </div>
    </div>
  );
}