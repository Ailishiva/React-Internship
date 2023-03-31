import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  const [text, setText] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();

  const startRecording = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    setText(transcript);
    resetTranscript();
  };

  return (
    <div>
      <h1> React Internship Assignment</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <div>{transcript}</div>
    </div>
  );
}

export default App;
