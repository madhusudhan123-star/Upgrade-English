"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square } from 'lucide-react';

const SpeechRecorder = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [error, setError] = useState('');
    const recognitionRef = useRef(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;

            recognitionRef.current.onresult = (event) => {
                let currentTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    currentTranscript += event.results[i][0].transcript;
                }
                setTranscript(currentTranscript);
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
            setTranscript('');
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
                <h3 className="text-lg font-semibold">Transcript:</h3>
                <p className="mt-2 p-2 border rounded min-h-[100px]">
                    {transcript || 'Speak to see your words here...'}
                </p>
            </div>
        </div>
    );
};

export default SpeechRecorder;