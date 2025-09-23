import { Apple, Play } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-12">
      {/* Left: Image */}
      <div className="flex justify-center bg-[#FEFAF1] p-5 rounded-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/homePage/appImage.png" // replace with your actual image path
          alt="App Preview"
          className="rounded-2xl "
        />
      </div>

      {/* Right: Text + Buttons */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Connecting our user with iOS & Android apps. Download from App Store &
          Play store
        </h2>

        <div className="flex flex-wrap gap-4">
          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <Apple className="w-5 h-5" />
            <span className="text-sm">Download on the <br /> App Store</span>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <Play className="w-5 h-5" />
            <span className="text-sm">Download on <br /> Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}