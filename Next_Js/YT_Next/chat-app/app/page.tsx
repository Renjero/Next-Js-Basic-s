"use client"
import {genrateTextAction} from"@/app/actions/aiAction"
import { useState } from "react";


export default function Home() {
  const [prompt , setprompt ] = useState("")
  const [output , setOutput] = useState("")

  const handelSendInput = async () =>{
    const response = await genrateTextAction(prompt)
    setOutput(response)
  }
  
  return (
   <main>
   
<div className="min-h-screen bg-gray-950 text-white flex flex-col p-5">

  {/* AI Response */}
  <div className="flex-1 w-full max-w-3xl mx-auto py-10">

    <h1 className="text-xl font-semibold mb-6">
      AI Response
    </h1>

    {output ? (
      <div className="text-gray-300 leading-7 whitespace-pre-wrap">
        {output}
      </div>
    ) : (
      <p className="text-gray-500 text-center mt-32">
        Hello! How can I help you today?
      </p>
    )}

  </div>

  {/* Bottom Input */}
  <div className="sticky bottom-0 w-full max-w-3xl mx-auto pb-4">

    <div className="flex items-center gap-3 bg-gray-900 border border-gray-700 focus-within:border-purple-500 rounded-2xl p-2 transition">

      <input
        value={prompt}
        onChange={(e) => setprompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handelSendInput();
        }}
        type="text"
        placeholder="Ask Google Gemini..."
        className="flex-1 min-w-0 bg-transparent outline-none px-3 py-3 text-white placeholder-gray-500"
      />

      <button
        onClick={handelSendInput}
        disabled={!prompt.trim()}
        className="bg-purple-600 hover:bg-purple-700 disabled:opacity-40 px-5 py-3 rounded-xl transition"
      >
        Send ↑
      </button>

    </div>

    <p className="text-center text-xs text-gray-600 mt-3">
      Powered by Google Gemini
    </p>

  </div>

</div>

   </main>
  );
}
