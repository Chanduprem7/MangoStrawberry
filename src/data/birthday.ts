import memoryOne from "@/assets/agnes1.jpeg";
import memoryTwo from "@/assets/agnes3.jpeg";
import memoryThree from "@/assets/agnes4.jpeg";

export const birthdayConfig = {
  recipientName: "Mango",
  senderName: "Strawberry",
  greeting: "Hey Mango",
  finalMessage: "I’m so lucky to have you in my life...",
  letter: [
    "Happy Birthday, my love ❤️",
    "I feel so happy and lucky that you came into my life. Since you came into my life, you've made so many moments more beautiful and special.",
    "On your special day, I wish that this birthday brings you more happiness, endless joy, success, wealth, and all the beautiful things you deserve. ✨",
    "And there’s one wish that means the most to me…",
    "I want us to celebrate our future birthdays together, year after year, with lots of love, happiness, smiles, and beautiful memories. ❤️",
    "You are truly the best, best love of my life, and I’m so grateful to have you with me.",
    "Once again, many more happy returns of the day, my love. 🎂❤️",
    "Forever yours,\n\nStrawberry😘",
  ],
};

export const memories = [
  { src: memoryOne, caption: "Every little walk feels like an adventure with you." },
  { src: memoryTwo, caption: "The quiet moments become my favorite memories." },
  { src: memoryThree, caption: "Even your anger seems beautiful when I picture us together." },
];

// Replace this original demo melody with a licensed song file whenever desired.
export const playlist = [
  { title: "Perfect", artist: "Ed Sheeran", audio: `${import.meta.env.BASE_URL}music/Perfect.mp3`, },
];

export const stageNames = [
  "Welcome",
  "Happy",
  "Birthday",
  "My Love",
  "Special Gift",
  "Love Letter",
  "Memories",
  "Our Playlist",
  "Forever",
] as const;
