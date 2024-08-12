// "use client"
// import React, { useState, useRef, useEffect } from 'react';
// import { Mic, Square, Play } from 'lucide-react';

// const VoiceRecorder = () => {
//     const [isRecording, setIsRecording] = useState(false);
//     const [audioUrl, setAudioUrl] = useState('');
//     const [transcript, setTranscript] = useState('');
//     const [error, setError] = useState('');
//     const mediaRecorderRef = useRef(null);
//     const audioChunksRef = useRef([]);

//     useEffect(() => {
//         return () => {
//             if (mediaRecorderRef.current && isRecording) {
//                 mediaRecorderRef.current.stop();
//             }
//         };
//     }, [isRecording]);

//     const startRecording = async () => {
//         try {
//             setError('');
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             mediaRecorderRef.current = new MediaRecorder(stream);

//             mediaRecorderRef.current.ondataavailable = (event) => {
//                 if (event.data.size > 0) {
//                     audioChunksRef.current.push(event.data);
//                 }
//             };

//             mediaRecorderRef.current.onstop = () => {
//                 const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
//                 const audioUrl = URL.createObjectURL(audioBlob);
//                 setAudioUrl(audioUrl);
//                 audioChunksRef.current = [];
//             };

//             audioChunksRef.current = [];
//             mediaRecorderRef.current.start();
//             setIsRecording(true);
//         } catch (err) {
//             console.error('Error accessing microphone:', err);
//             setError('Error accessing microphone. Please check permissions and try again.');
//         }
//     };

//     const stopRecording = () => {
//         if (mediaRecorderRef.current && isRecording) {
//             mediaRecorderRef.current.stop();
//             setIsRecording(false);
//             mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
//         }
//     };

//     const handleTranscription = async () => {
//         if (!audioUrl) {
//             setError('No recorded audio to transcribe.');
//             return;
//         }

//         setTranscript('Transcribing...');

//         // Here you would typically send the audio to a server for transcription
//         // For this example, we'll just set a placeholder text after a delay
//         try {
//             await new Promise(resolve => setTimeout(resolve, 2000));
//             setTranscript('This is a simulated transcription of your audio.');
//         } catch (err) {
//             console.error('Transcription error:', err);
//             setError('Error during transcription. Please try again.');
//         }
//     };

//     return (
//         <div className="p-4">
//             {error && (
//                 <div variant="destructive" className="mb-4">
//                     <p>{error}</p>
//                 </div>
//             )}
//             <div className="mb-4 flex space-x-2">
//                 <button
//                     onClick={isRecording ? stopRecording : startRecording}
//                     className={`${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded`}
//                 >
//                     {isRecording ? <Square className="mr-2" /> : <Mic className="mr-2" />}
//                     {isRecording ? 'Stop Recording' : 'Start Recording'}
//                 </button>
//                 {audioUrl && (
//                     <button onClick={handleTranscription} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
//                         <Play className="mr-2" /> Transcribe
//                     </button>
//                 )}
//             </div>
//             {audioUrl && (
//                 <div className="mb-4">
//                     <audio src={audioUrl} controls className="w-full" />
//                 </div>
//             )}
//             <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Transcript:</h3>
//                 <p className="mt-2 p-2 border rounded min-h-[100px]">
//                     {transcript || 'Transcription will appear here after recording and transcribing.'}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default VoiceRecorder;

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square } from 'lucide-react';

const SpeechToText = () => {
    const [isListening, setIsListening] = useState(false);
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const recognitionRef = useRef(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;

            recognitionRef.current.onresult = (event) => {
                let currentText = '';
                for (let i = 0; i < event.results.length; i++) {
                    currentText += event.results[i][0].transcript + ' ';
                }
                setText(currentText.trim());
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                setError(`Error: ${event.error}`);
                setIsListening(false);
            };

        } else {
            setError('Speech recognition is not supported in this browser.');
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            setError('');
            setText('');
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    return (
        <div className="p-4">
            {error && (
                <div variant="destructive" className="mb-4">
                    <p>{error}</p>
                </div>
            )}
            <div className="mb-4">
                <button
                    onClick={toggleListening}
                    className={`${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded`}
                >
                    {isListening ? <Square className="mr-2" /> : <Mic className="mr-2" />}
                    {isListening ? 'Stop Listening' : 'Start Listening'}
                </button>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Spoken Text:</h3>
                <p className="mt-2 p-2 border rounded min-h-[100px] whitespace-pre-wrap">
                    {text || 'Your spoken words will appear here...'}
                </p>
            </div>
        </div>
    );
};

export default SpeechToText;