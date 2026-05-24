import { Lesson, Unit } from "@/types/lesson";

export const units: Unit[] = [
  {
    id: "unit-greetings",
    title: "Unit 1: Greetings",
    description: "Start with common greetings, gratitude, and polite everyday words.",
    order: 1,
    lessonIds: ["greetings-1", "greetings-2"]
  },
  {
    id: "unit-family",
    title: "Unit 2: Family",
    description: "Learn words for family members and simple family sentences.",
    order: 2,
    lessonIds: ["family-1", "family-2"]
  },
  {
    id: "unit-food",
    title: "Unit 3: Food & Daily Life",
    description: "Practice useful words for eating, drinking, and daily conversation.",
    order: 3,
    lessonIds: ["food-1"]
  }
];

export const lessons: Lesson[] = [
  {
    id: "greetings-1",
    unitId: "unit-greetings",
    unitTitle: "Unit 1: Greetings",
    title: "Hello and Goodbye",
    description: "Learn basic Ilokano greetings used in everyday conversations.",
    xpReward: 10,
    order: 1,
    exercises: [
      {
        id: "g1-q1",
        type: "multiple-choice",
        prompt: "What does “Naimbag a bigat” mean?",
        choices: ["Good morning", "Good evening", "Thank you", "Goodbye"],
        correctAnswer: "Good morning",
        explanation: "“Naimbag a bigat” means “Good morning.”"
      },
      {
        id: "g1-q2",
        type: "multiple-choice",
        prompt: "Choose the Ilokano phrase for “Good afternoon.”",
        choices: ["Naimbag a rabii", "Naimbag a malem", "Agyamanak", "Pakawanennak"],
        correctAnswer: "Naimbag a malem",
        explanation: "“Naimbag a malem” means “Good afternoon.”"
      },
      {
        id: "g1-q3",
        type: "translation",
        prompt: "Translate to English: “Agyamanak.”",
        correctAnswer: "Thank you",
        explanation: "“Agyamanak” is a polite way to say “Thank you.”"
      },
      {
        id: "g1-q4",
        type: "multiple-choice",
        prompt: "What does “Pakawanennak” mean?",
        choices: ["Excuse me / Sorry", "I am hungry", "Good night", "See you later"],
        correctAnswer: "Excuse me / Sorry",
        explanation: "“Pakawanennak” can be used to mean “Excuse me” or “Sorry.”"
      },
      {
        id: "g1-q5",
        type: "fill-blank",
        prompt: "Fill in the blank: “_____ a bigat” means “Good morning.”",
        correctAnswer: "Naimbag",
        explanation: "The full phrase is “Naimbag a bigat.”"
      }
    ]
  },
  {
    id: "greetings-2",
    unitId: "unit-greetings",
    unitTitle: "Unit 1: Greetings",
    title: "How Are You?",
    description: "Practice asking how someone is and answering politely.",
    xpReward: 12,
    order: 2,
    exercises: [
      {
        id: "g2-q1",
        type: "multiple-choice",
        prompt: "What does “Kumusta ka?” mean?",
        choices: ["How are you?", "Where are you?", "What is your name?", "Are you hungry?"],
        correctAnswer: "How are you?",
        explanation: "“Kumusta ka?” means “How are you?”"
      },
      {
        id: "g2-q2",
        type: "multiple-choice",
        prompt: "Choose the best meaning of “Nasayaatak.”",
        choices: ["I am fine", "I am sleepy", "I am leaving", "I am cooking"],
        correctAnswer: "I am fine",
        explanation: "“Nasayaatak” means “I am fine.”"
      },
      {
        id: "g2-q3",
        type: "translation",
        prompt: "Translate to English: “Ania ti naganmo?”",
        correctAnswer: "What is your name?",
        explanation: "“Ania ti naganmo?” means “What is your name?”"
      },
      {
        id: "g2-q4",
        type: "multiple-choice",
        prompt: "What does “Siak ni Maria” mean?",
        choices: ["I am Maria", "Where is Maria?", "Maria is here", "Thank you, Maria"],
        correctAnswer: "I am Maria",
        explanation: "“Siak ni Maria” means “I am Maria.”"
      }
    ]
  },
  {
    id: "family-1",
    unitId: "unit-family",
    unitTitle: "Unit 2: Family",
    title: "Family Words",
    description: "Learn important family vocabulary.",
    xpReward: 10,
    order: 3,
    lockedByDefault: true,
    exercises: [
      {
        id: "f1-q1",
        type: "multiple-choice",
        prompt: "What does “nanang” mean?",
        choices: ["Mother", "Father", "Sibling", "Grandchild"],
        correctAnswer: "Mother",
        explanation: "“Nanang” means “mother.”"
      },
      {
        id: "f1-q2",
        type: "multiple-choice",
        prompt: "What does “tatang” mean?",
        choices: ["Father", "Mother", "Auntie", "Cousin"],
        correctAnswer: "Father",
        explanation: "“Tatang” means “father.”"
      },
      {
        id: "f1-q3",
        type: "translation",
        prompt: "Translate to English: “kabsat.”",
        correctAnswer: "Sibling",
        explanation: "“Kabsat” means “sibling.”"
      },
      {
        id: "f1-q4",
        type: "multiple-choice",
        prompt: "Choose the meaning of “lolo.”",
        choices: ["Grandfather", "Grandmother", "Uncle", "Child"],
        correctAnswer: "Grandfather",
        explanation: "“Lolo” means “grandfather.”"
      }
    ]
  },
  {
    id: "family-2",
    unitId: "unit-family",
    unitTitle: "Unit 2: Family",
    title: "Simple Family Sentences",
    description: "Use family words in short sentences.",
    xpReward: 12,
    order: 4,
    lockedByDefault: true,
    exercises: [
      {
        id: "f2-q1",
        type: "multiple-choice",
        prompt: "What does “Ay-ayatek ti pamilyak” mean?",
        choices: ["I love my family", "I see my family", "My family is big", "My family is eating"],
        correctAnswer: "I love my family",
        explanation: "“Ay-ayatek ti pamilyak” means “I love my family.”"
      },
      {
        id: "f2-q2",
        type: "fill-blank",
        prompt: "Fill in the blank: “Ay-ayatek ti _____” means “I love my mother.”",
        correctAnswer: "nanangko",
        explanation: "“Nanangko” means “my mother.”"
      },
      {
        id: "f2-q3",
        type: "multiple-choice",
        prompt: "Choose the phrase for “my father.”",
        choices: ["tatangko", "nanangko", "kabsatko", "pamilyak"],
        correctAnswer: "tatangko",
        explanation: "“Tatangko” means “my father.”"
      }
    ]
  },
  {
    id: "food-1",
    unitId: "unit-food",
    unitTitle: "Unit 3: Food & Daily Life",
    title: "Food Basics",
    description: "Practice words and phrases related to food.",
    xpReward: 10,
    order: 5,
    lockedByDefault: true,
    exercises: [
      {
        id: "fd1-q1",
        type: "multiple-choice",
        prompt: "What does “mangan” mean?",
        choices: ["Eat", "Drink", "Cook", "Sleep"],
        correctAnswer: "Eat",
        explanation: "“Mangan” means “eat.”"
      },
      {
        id: "fd1-q2",
        type: "multiple-choice",
        prompt: "What does “danum” mean?",
        choices: ["Water", "Rice", "Fish", "Soup"],
        correctAnswer: "Water",
        explanation: "“Danum” means “water.”"
      },
      {
        id: "fd1-q3",
        type: "translation",
        prompt: "Translate to English: “Mabisinak.”",
        correctAnswer: "I am hungry",
        explanation: "“Mabisinak” means “I am hungry.”"
      }
    ]
  }
];

export function getLessonById(lessonId: string) {
  return lessons.find((lesson) => lesson.id === lessonId);
}

export function getNextLessonId(currentLessonId: string) {
  const sortedLessons = [...lessons].sort((a, b) => a.order - b.order);
  const currentIndex = sortedLessons.findIndex((lesson) => lesson.id === currentLessonId);
  return sortedLessons[currentIndex + 1]?.id;
}
