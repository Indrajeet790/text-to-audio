// const inputText = document.getElementById('inputText');
// const convertButton = document.getElementById('convertButton');
// const audioPlayer = document.getElementById('audioPlayer');

// const synth = window.speechSynthesis;

// convertButton.addEventListener('click', () => {
//     const textToConvert = inputText.value;

//     const utterance = new SpeechSynthesisUtterance(textToConvert);
//     synth.speak(utterance);

//     utterance.onend = () => {
//         // Audio playback has finished
//         audioPlayer.src = URL.createObjectURL(new Blob([new Uint8Array(0)], { type: 'audio/wav' }));
//         audioPlayer.play();
//     };
// });
const inputText = document.getElementById('inputText');
const convertButton = document.getElementById('convertButton');
const audioPlayer = document.getElementById('audioPlayer');

const synth = window.speechSynthesis;

// Function to get a smoother voice
function getSmoothVoice() {
    const voices = synth.getVoices();
    const smoothVoice = voices.find(voice => voice.name === 'YourPreferredVoiceName');
    
    if (smoothVoice) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.voice = smoothVoice;
        return utterance;
    } else {
        return new SpeechSynthesisUtterance();
    }
}

convertButton.addEventListener('click', () => {
    const textToConvert = inputText.value;

    const utterance = getSmoothVoice();
    utterance.text = textToConvert;
    
    synth.speak(utterance);

    utterance.onend = () => {
        // Audio playback has finished
        audioPlayer.src = URL.createObjectURL(new Blob([new Uint8Array(0)], { type: 'audio/wav' }));
        audioPlayer.play();
    };
});

