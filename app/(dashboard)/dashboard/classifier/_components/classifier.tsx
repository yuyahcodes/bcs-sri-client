"use client"

import React, { useState } from 'react';

const Classifier: React.FC = () => {
    const [classificationResults, setClassificationResults] = useState<any[]>([{}]);
    const [loading, setLoading] = useState<boolean>(false);

    // const handleClassify = async () => {
    //     setClassificationResults([{ "Results": "Loading" }]);
    //     setLoading(true);
    //
    //     const textInput = (document.getElementById('classifierInput') as HTMLTextAreaElement).value;
    //     const data = textInput;
    //
    //     try {
    //         const response = await fetch('/classification', { text: data });
    //         setClassificationResults([response.data.classificationResponse]);
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="mx-auto p-4 ">
            {/*<h2 className="text-2xl font-bold mb-2">Input text to classify</h2>*/}
            <h5 className="text-lg text-gray-600 mb-4">
                You can either put one piece of text or a link of an article that you want to classify.
            </h5>
            <div className="mb-3">
                <input
                    type="text"
                    id="classifierInputLink"
                    placeholder="Enter Link here"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-3">
        <textarea
            id="classifierInput"
            rows={10}
            placeholder="Or paste the text directly"
            className="w-full p-2 border border-gray-300 rounded-lg"
        />
            </div>
            <button
                className="mb-3 px-4 py-2 bg-blueGem-500 text-white rounded-lg hover:bg-blueGem-700"
            >
                Classify
            </button>
            {/*<button*/}
            {/*    onClick={handleClassify}*/}
            {/*    className="mb-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"*/}
            {/*>*/}
            {/*    Classify*/}
            {/*</button>*/}
            {loading && (
                <div className="w-full mb-3">
                    <div className="w-full h-2 bg-blue-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                    </div>
                </div>
            )}
            <div className="mb-3">
                {/*<ClassificationResult classificationResults={classificationResults} />*/}
            </div>
        </div>
    );
};

export default Classifier;
