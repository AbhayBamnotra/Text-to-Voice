import React, { useState } from "react";
function TextToSpeechConverter() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleListenClick = () => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStopClick = () => {
    window.speechSynthesis.cancel();
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900">
      <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-8 rounded-lg shadow-lg text-white w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Text To Speech <span className="text-red-500 underline">Converter</span>
        </h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Write anything here..."
          className="w-full  h-80 p-4 rounded-lg text-white focus:outline-none"
        />
        <div className="flex items-center justify-between cursor-pointer mt-4">
          <select id="voice" className="p-2 rounded-lg cursor-pointer bg-indigo-600 text-white focus:outline-none">
            <option value="en-US">English (US)</option>

          </select>
          <button
            onClick={handleListenClick}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300"
          >
            <span className="material-icons"></span> Listen
          </button>
          <button onClick={handleStopClick} className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300"> Stop Voice</button>
        </div>
      </div>
    </div>
  );
}

export default TextToSpeechConverter;
