const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio("src/tunes/1.wav");

const playTune = (key) => {
   audio.src = `src/tunes/${key}.wav`;
   audio.play();
}

pianoKeys.forEach((key) => {
   console.log(key.dataset.key);
   key.addEventListener('click', () => playTune(key.dataset.key));
});

document.addEventListener('keydown')