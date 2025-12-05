import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WhitepaperModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Container */}
      <div className="relative w-[90%] max-w-3xl  bg-gradient-to-b from-slate-950 to-blue-950 rounded-2xl p-8 shadow-2xl animate-scaleIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold mb-4">Download Whitepaper</h1>
        
        <p className="text-gray-600 mb-6">
            Deep dive into our architecture, fraud detection models, 
          compliance engine design, and IFMIS integration blueprint.
        </p>

        <a
          href="/whitepaper.pdf"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          download
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
