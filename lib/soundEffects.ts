// HOW DO I EVEN MAKE CUSTOM SOUND EFFECTS???!!!!
// AI generated since I didn't know how to make a sound effect 
// Sound effect for answers that are correct / non-correct  
function playToneSequence(frequencies: number[], duration = 0.08): void {
  if (typeof window === "undefined") return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const now = context.currentTime;

  frequencies.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = now + index * duration;
    const end = start + duration;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.18, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(end + 0.02);
  });

  setTimeout(() => {
    void context.close();
  }, Math.ceil((frequencies.length * duration + 0.1) * 1000));
}

export function playCorrectSound(): void {
  playToneSequence([523.25, 659.25, 783.99], 0.075);
}

export function playWrongSound(): void {
  playToneSequence([220, 164.81], 0.12);
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
