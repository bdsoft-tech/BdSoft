'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-red-400 text-black p-4 rounded-full shadow-2xl transition-all duration-300"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-92.5 h-180  rounded-[35px] shadow-2xl z-50 border border-gray-700 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b bg-white shrink-0">
            <div className="flex items-center gap-3">
              <Image
                src=""
                alt="Support"
                width={48}
                height={48}
                className="rounded-full"
              />

              <div>
                <h2 className="font-semibold text-[28px] leading-none text-black">
                  Antony
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Active 4h ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-500">
              <MoreHorizontal size={24} />

              <X
                size={24}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>

          {/* Scrollable Messages */}
          <div className="flex-1 overflow-y-auto bg-[#f5f5f5] p-5 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">

            {/* Message 1 */}
            <div>
              <div className="bg-[#e9e9e9] rounded-3xl p-5 max-w-75">
                <p className="text-[18px] text-black leading-relaxed">
                  If you have any questions about Softvaly, I’m here to help 🙂
                </p>

                <p className="mt-5 text-[18px] text-black">
                  Antony
                </p>
              </div>

              <p className="text-gray-500 text-sm mt-2">
                Antony • 1h
              </p>
            </div>

            {/* Extra Messages For Scroll */}
            {[...Array(15)].map((_, i) => (
              <div key={i}>
                <div className=" rounded-3xl p-4 max-w-65 shadow-sm">
                  <p className="text-gray-800">
                    This is demo message #{i + 1}
                  </p>
                </div>

                <p className="text-gray-400 text-xs mt-1">
                  Antony • now
                </p>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="p-4 border-t shrink-0 text-gray-500 bg-white">
            <div className="border rounded-3xl p-4">

              <input
                type="email"
                placeholder="email@example.com"
                className="w-full outline-none text-lg pb-4 border-b"
              />

              <div className="flex items-center justify-between pt-5">
                <input
                  type="text"
                  placeholder="Message..."
                  className="flex-1 outline-none text-lg"
                />

                <button className="bg-gray-200 hover:bg-blue-600 hover:text-white transition-all p-3 rounded-full">
                  <Send size={20} />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm mt-5">
              Powered by Fin
            </div>
          </div>
        </div>
      )}
    </>
  )
}