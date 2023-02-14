// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 5;
  voice.rate = 0.5;
  voice.pitch = 0; // Can be 0, 1, or 2
  synth.speak(voice);
}