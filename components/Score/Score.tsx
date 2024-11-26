"use client";

import React, { useState } from 'react';

const Score: React.FC = () => {
    const [redScore, setRedScore] = useState(0);
    const [blueScore, setBlueScore] = useState(0);

    const resetScores = () => {
        setRedScore(0);
        setBlueScore(0);
    };

    return (
        <div className="flex flex-row items-center relative">
                <div
                    className="w-1/2 h-screen font-bold bg-red-700 text-white p-4 text-8xl flex items-center justify-center  cursor-pointer"
                    onClick={() => setRedScore(redScore + 1)}
                >
                    {redScore}
                </div>
                <div
                    className="w-1/2 h-screen font-bold bg-blue-700 text-white p-4 text-8xl flex items-center justify-center cursor-pointer"
                    onClick={() => setBlueScore(blueScore + 1)}
                >
                    {blueScore}
                </div>
            <button
                className="bg-gray-500 text-white p-2 rounded absolute bottom-0"
                onClick={resetScores}
            >
                Nulstil
            </button>
        </div>
    );
};

export default Score