//ALL THE QUESTIONS TO EVERYTHING, INCLUDING ALL SECTIONS
import type { Lesson, Unit } from "@/types/lesson";

export const units: Unit[] = [
  {
    "id": "unit-starter",
    "title": "Unit 1: Starter Phrases",
    "description": "Begin with useful phrases, respectful greetings, and confidence building practice.",
    "orderIndex": 1,
    "stage": "Foundation",
    "focus": [
      "Greetings",
      "Politeness",
      "Daily classroom phrases"
    ]
  },
  {
    "id": "unit-self",
    "title": "Unit 2: Myself",
    "description": "Introduce your name, talk about yourself, and notice how Ilokano handles pronouns.",
    "orderIndex": 2,
    "stage": "Foundation",
    "focus": [
      "Introductions",
      "Pronouns",
      "No grammatical gender"
    ]
  },
  {
    "id": "unit-family",
    "title": "Unit 3: Family",
    "description": "Learn family words and simple sentences about people close to you.",
    "orderIndex": 3,
    "stage": "People",
    "focus": [
      "Family",
      "People",
      "Possession"
    ]
  },
  {
    "id": "unit-numbers",
    "title": "Unit 4: Counting",
    "description": "Practice numbers for age, quantity, prices, and everyday counting.",
    "orderIndex": 4,
    "stage": "Daily Life",
    "focus": [
      "Numbers",
      "Age",
      "Quantity"
    ]
  },
  {
    "id": "unit-colors",
    "title": "Unit 5: Colors & Descriptions",
    "description": "Describe objects with colors and simple adjectives.",
    "orderIndex": 5,
    "stage": "Description",
    "focus": [
      "Colors",
      "Adjectives",
      "Description"
    ]
  },
  {
    "id": "unit-time",
    "title": "Unit 6: Time & Days",
    "description": "Talk about morning, evening, today, yesterday, and tomorrow.",
    "orderIndex": 6,
    "stage": "Daily Life",
    "focus": [
      "Time",
      "Days",
      "Routine"
    ]
  },
  {
    "id": "unit-food",
    "title": "Unit 7: Food & Needs",
    "description": "Use common food words and basic phrases for eating, drinking, and hunger.",
    "orderIndex": 7,
    "stage": "Daily Life",
    "focus": [
      "Food",
      "Needs",
      "Polite requests"
    ]
  },
  {
    "id": "unit-places",
    "title": "Unit 8: Places & Directions",
    "description": "Ask where places are and understand simple direction words.",
    "orderIndex": 8,
    "stage": "Navigation",
    "focus": [
      "Places",
      "Directions",
      "Where questions"
    ]
  },
  {
    "id": "unit-conversation",
    "title": "Unit 9: Everyday Conversations",
    "description": "Combine earlier skills into short, useful exchanges.",
    "orderIndex": 9,
    "stage": "Conversation",
    "focus": [
      "Questions",
      "Answers",
      "Mini-dialogues"
    ]
  },
  {
    "id": "unit-review",
    "title": "Unit 10: Checkpoint Review",
    "description": "Review greetings, family, numbers, colors, time, food, and directions together.",
    "orderIndex": 10,
    "stage": "Review",
    "focus": [
      "Spaced review",
      "Mixed practice",
      "Confidence check"
    ]
  }
];

export const sampleLessons: Lesson[] = [
  {
    "id": "starter-1",
    "unitId": "unit-starter",
    "unitTitle": "Unit 1: Starter Phrases",
    "lessonTitle": "Hello, Thanks, and Respect",
    "description": "Start with greetings and polite words you can use immediately.",
    "orderIndex": 1,
    "xpReward": 10,
    "stage": "Foundation",
    "skillTags": [
      "Greetings",
      "Politeness",
      "Day one phrases"
    ],
    "questions": [
      {
        "id": "starter-1-q1",
        "type": "multiple-choice",
        "prompt": "What does “Naimbag a bigat” mean?",
        "choices": [
          "Good morning",
          "Good night",
          "Thank you"
        ],
        "correctAnswer": "Good morning",
        "explanation": "“Naimbag a bigat” means “Good morning.”"
      },
      {
        "id": "starter-1-q2",
        "type": "multiple-choice",
        "prompt": "What does “Naimbag a malem” mean?",
        "choices": [
          "Good afternoon",
          "Good morning",
          "Goodbye"
        ],
        "correctAnswer": "Good afternoon",
        "explanation": "“Malem” refers to the afternoon."
      },
      {
        "id": "starter-1-q3",
        "type": "multiple-choice",
        "prompt": "What does “Naimbag a rabii” mean?",
        "choices": [
          "Good evening",
          "Good morning",
          "Please"
        ],
        "correctAnswer": "Good evening",
        "explanation": "“Rabii” refers to evening or night."
      },
      {
        "id": "starter-1-q4",
        "type": "multiple-choice",
        "prompt": "Choose the Ilokano phrase for “Thank you.”",
        "choices": [
          "Agyamanak",
          "Kumusta ka?",
          "Wen"
        ],
        "correctAnswer": "Agyamanak",
        "explanation": "“Agyamanak” is a common way to say “Thank you.”"
      },
      {
        "id": "starter-1-q5",
        "type": "multiple-choice",
        "prompt": "What does “Awan ania man” mean?",
        "choices": [
          "You’re welcome",
          "I am hungry",
          "Where is it?"
        ],
        "correctAnswer": "You’re welcome",
        "explanation": "“Awan ania man” can be used like “You’re welcome” or “It is nothing.”"
      },
      {
        "id": "starter-1-q6",
        "type": "multiple-choice",
        "prompt": "What does “Pakawanennak” mean?",
        "choices": [
          "Excuse me / I am sorry",
          "I am a student",
          "Good afternoon"
        ],
        "correctAnswer": "Excuse me / I am sorry",
        "explanation": "“Pakawanennak” is used to ask forgiveness or say excuse me."
      },
      {
        "id": "starter-1-q7",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kumusta ka?",
        "correctAnswer": "How are you?",
        "acceptedAnswers": [
          "how are you",
          "how are you?"
        ],
        "explanation": "“Kumusta ka?” asks how one person is doing."
      },
      {
        "id": "starter-1-q8",
        "type": "multiple-choice",
        "prompt": "Which response means “I am good/fine”?",
        "choices": [
          "Nasayaatak.",
          "Mabisinak.",
          "Sadino?"
        ],
        "correctAnswer": "Nasayaatak.",
        "explanation": "“Nasayaatak” can mean “I am good” or “I am fine.”"
      },
      {
        "id": "starter-1-q9",
        "type": "multiple-choice",
        "prompt": "What does “Wen” mean?",
        "choices": [
          "Yes",
          "No",
          "Now"
        ],
        "correctAnswer": "Yes",
        "explanation": "“Wen” means “yes.”"
      },
      {
        "id": "starter-1-q10",
        "type": "multiple-choice",
        "prompt": "What does “Saan” mean?",
        "choices": [
          "No",
          "Yes",
          "Water"
        ],
        "correctAnswer": "No",
        "explanation": "“Saan” means “no” or “not.”"
      }
    ]
  },
  {
    "id": "starter-2",
    "unitId": "unit-starter",
    "unitTitle": "Unit 1: Starter Phrases",
    "lessonTitle": "Leaving and Returning",
    "description": "Practice short phrases for going, coming, and saying goodbye naturally.",
    "orderIndex": 2,
    "xpReward": 10,
    "stage": "Foundation",
    "skillTags": [
      "Goodbye",
      "Movement",
      "Everyday phrases"
    ],
    "questions": [
      {
        "id": "starter-2-q1",
        "type": "multiple-choice",
        "prompt": "What does “Mapanakun” mean?",
        "choices": [
          "I am leaving now",
          "I am eating now",
          "I am reading now"
        ],
        "correctAnswer": "I am leaving now",
        "explanation": "“Mapanakun” means “I am leaving now.”"
      },
      {
        "id": "starter-2-q2",
        "type": "multiple-choice",
        "prompt": "Which Ilokano word means “come”?",
        "choices": [
          "umay",
          "mangan",
          "danum"
        ],
        "correctAnswer": "umay",
        "explanation": "“Umay” means “to come.”"
      },
      {
        "id": "starter-2-q3",
        "type": "multiple-choice",
        "prompt": "Which Ilokano word means “go”?",
        "choices": [
          "mapan",
          "kabsat",
          "asul"
        ],
        "correctAnswer": "mapan",
        "explanation": "“Mapan” means “to go.”"
      },
      {
        "id": "starter-2-q4",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agsubliak.",
        "correctAnswer": "I will return",
        "acceptedAnswers": [
          "i will return",
          "i return",
          "i am returning",
          "i'll return"
        ],
        "explanation": "“Agsubliak” means “I will return” or “I return,” depending on context."
      },
      {
        "id": "starter-2-q5",
        "type": "multiple-choice",
        "prompt": "What does “Agannad ka” mean?",
        "choices": [
          "Take care",
          "Good morning",
          "I am tired"
        ],
        "correctAnswer": "Take care",
        "explanation": "“Agannad ka” is a caring way to say “Take care.”"
      },
      {
        "id": "starter-2-q6",
        "type": "multiple-choice",
        "prompt": "Choose the best meaning of “Agkita ta manen.”",
        "choices": [
          "We will see each other again",
          "I am hungry",
          "The shirt is red"
        ],
        "correctAnswer": "We will see each other again",
        "explanation": "“Agkita ta manen” is like “See you again.”"
      },
      {
        "id": "starter-2-q7",
        "type": "multiple-choice",
        "prompt": "What does “inton damdama” mean?",
        "choices": [
          "later",
          "yesterday",
          "left"
        ],
        "correctAnswer": "later",
        "explanation": "“Inton damdama” means “later.”"
      },
      {
        "id": "starter-2-q8",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Umayak.",
        "correctAnswer": "I will come",
        "acceptedAnswers": [
          "i will come",
          "i am coming",
          "i come",
          "i'll come"
        ],
        "explanation": "“Umayak” means “I will come” or “I am coming.”"
      },
      {
        "id": "starter-2-q9",
        "type": "multiple-choice",
        "prompt": "Choose the phrase that best fits when leaving politely.",
        "choices": [
          "Mapanakun.",
          "Puraw.",
          "Sangapulo."
        ],
        "correctAnswer": "Mapanakun.",
        "explanation": "“Mapanakun” tells someone you are leaving now."
      },
      {
        "id": "starter-2-q10",
        "type": "multiple-choice",
        "prompt": "What phrase would you say to encourage care before someone leaves?",
        "choices": [
          "Agannad ka",
          "Adu",
          "Nangisit"
        ],
        "correctAnswer": "Agannad ka",
        "explanation": "“Agannad ka” means “Take care.”"
      }
    ]
  },
  {
    "id": "self-1",
    "unitId": "unit-self",
    "unitTitle": "Unit 2: Myself",
    "lessonTitle": "Names and Introductions",
    "description": "Say your name, ask for someone else’s name, and introduce yourself.",
    "orderIndex": 3,
    "xpReward": 12,
    "stage": "Foundation",
    "skillTags": [
      "Introductions",
      "Names",
      "Identity"
    ],
    "questions": [
      {
        "id": "self-1-q1",
        "type": "multiple-choice",
        "prompt": "What does “Ania ti naganmo?” mean?",
        "choices": [
          "What is your name?",
          "Where is your house?",
          "Are you hungry?"
        ],
        "correctAnswer": "What is your name?",
        "explanation": "“Ania ti naganmo?” asks for someone’s name."
      },
      {
        "id": "self-1-q2",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Ti naganko ket Maria.",
        "correctAnswer": "My name is Maria",
        "acceptedAnswers": [
          "my name is maria",
          "i am maria",
          "i'm maria"
        ],
        "explanation": "“Ti naganko ket Maria” means “My name is Maria.”"
      },
      {
        "id": "self-1-q3",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Siak ni Justine.",
        "correctAnswer": "I am Justine",
        "acceptedAnswers": [
          "i am justine",
          "i'm justine"
        ],
        "explanation": "“Siak ni Justine” means “I am Justine.”"
      },
      {
        "id": "self-1-q4",
        "type": "multiple-choice",
        "prompt": "What does “estudianteak” mean?",
        "choices": [
          "I am a student",
          "I am a teacher",
          "I am hungry"
        ],
        "correctAnswer": "I am a student",
        "explanation": "“Estudianteak” means “I am a student.”"
      },
      {
        "id": "self-1-q5",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Taga-Hawaiiak.",
        "correctAnswer": "I am from Hawaii",
        "acceptedAnswers": [
          "i am from hawaii",
          "i'm from hawaii"
        ],
        "explanation": "“Taga-Hawaiiak” means “I am from Hawaii.”"
      },
      {
        "id": "self-1-q6",
        "type": "multiple-choice",
        "prompt": "What does “Naragsakak” mean?",
        "choices": [
          "I am happy",
          "I am tired",
          "I am leaving"
        ],
        "correctAnswer": "I am happy",
        "explanation": "“Naragsakak” means “I am happy.”"
      },
      {
        "id": "self-1-q7",
        "type": "multiple-choice",
        "prompt": "What does “Nabannogak” mean?",
        "choices": [
          "I am tired",
          "I am happy",
          "I am ten"
        ],
        "correctAnswer": "I am tired",
        "explanation": "“Nabannogak” means “I am tired.”"
      },
      {
        "id": "self-1-q8",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agadalak iti Ilokano.",
        "correctAnswer": "I study Ilokano",
        "acceptedAnswers": [
          "i study ilokano",
          "i am studying ilokano",
          "i'm studying ilokano"
        ],
        "explanation": "“Agadalak” means “I study” or “I am studying.”"
      },
      {
        "id": "self-1-q9",
        "type": "multiple-choice",
        "prompt": "Which phrase means “I like to study”?",
        "choices": [
          "Kayatko ti agadal.",
          "Sadino ti eskuelaan?",
          "Naimbag a rabii."
        ],
        "correctAnswer": "Kayatko ti agadal.",
        "explanation": "“Kayatko” means “I like” or “I want.”"
      },
      {
        "id": "self-1-q10",
        "type": "multiple-choice",
        "prompt": "Which sentence introduces a name?",
        "choices": [
          "Ti naganko ket Ana.",
          "Adu ti danum.",
          "Kannawan ti dalan."
        ],
        "correctAnswer": "Ti naganko ket Ana.",
        "explanation": "“Ti naganko ket...” is a beginner-friendly pattern for giving your name."
      }
    ]
  },
  {
    "id": "self-2",
    "unitId": "unit-self",
    "unitTitle": "Unit 2: Myself",
    "lessonTitle": "Pronouns and People",
    "description": "Learn basic pronouns and the helpful note that Ilokano does not depend on he/she grammatical gender.",
    "orderIndex": 4,
    "xpReward": 12,
    "stage": "Foundation",
    "skillTags": [
      "Pronouns",
      "People",
      "Gender note"
    ],
    "questions": [
      {
        "id": "self-2-q1",
        "type": "multiple-choice",
        "prompt": "What does “siak” mean?",
        "choices": [
          "I / me",
          "you",
          "they"
        ],
        "correctAnswer": "I / me",
        "explanation": "“Siak” means “I” or “me.”"
      },
      {
        "id": "self-2-q2",
        "type": "multiple-choice",
        "prompt": "What does “sika” mean?",
        "choices": [
          "you",
          "I",
          "we"
        ],
        "correctAnswer": "you",
        "explanation": "“Sika” means “you” when speaking to one person."
      },
      {
        "id": "self-2-q3",
        "type": "multiple-choice",
        "prompt": "What does “isuna” usually mean?",
        "choices": [
          "he / she / it",
          "we",
          "water"
        ],
        "correctAnswer": "he / she / it",
        "explanation": "“Isuna” can be translated as he, she, or it depending on context."
      },
      {
        "id": "self-2-q4",
        "type": "multiple-choice",
        "prompt": "What does “dakami” mean?",
        "choices": [
          "we / us",
          "you all",
          "the child"
        ],
        "correctAnswer": "we / us",
        "explanation": "“Dakami” means “we/us” when the listener is not included."
      },
      {
        "id": "self-2-q5",
        "type": "multiple-choice",
        "prompt": "What does “dakayo” mean?",
        "choices": [
          "you all",
          "I",
          "father"
        ],
        "correctAnswer": "you all",
        "explanation": "“Dakayo” is used for plural “you.”"
      },
      {
        "id": "self-2-q6",
        "type": "multiple-choice",
        "prompt": "What does “daida” mean?",
        "choices": [
          "they / them",
          "today",
          "red"
        ],
        "correctAnswer": "they / them",
        "explanation": "“Daida” means “they” or “them.”"
      },
      {
        "id": "self-2-q7",
        "type": "multiple-choice",
        "prompt": "What does “lalaki” mean?",
        "choices": [
          "man / boy / male",
          "woman / girl / female",
          "friend"
        ],
        "correctAnswer": "man / boy / male",
        "explanation": "“Lalaki” refers to a man, boy, or male."
      },
      {
        "id": "self-2-q8",
        "type": "multiple-choice",
        "prompt": "What does “babai” mean?",
        "choices": [
          "woman / girl / female",
          "man / boy / male",
          "school"
        ],
        "correctAnswer": "woman / girl / female",
        "explanation": "“Babai” refers to a woman, girl, or female."
      },
      {
        "id": "self-2-q9",
        "type": "multiple-choice",
        "prompt": "What should beginners remember about “isuna”?",
        "choices": [
          "It is not limited to only he or only she",
          "It only means father",
          "It means ten"
        ],
        "correctAnswer": "It is not limited to only he or only she",
        "explanation": "Ilokano does not use he/she grammatical gender the same way English does."
      },
      {
        "id": "self-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Isuna ti gayyemko.",
        "correctAnswer": "He or she is my friend",
        "acceptedAnswers": [
          "he is my friend",
          "she is my friend",
          "he or she is my friend",
          "they are my friend"
        ],
        "explanation": "“Isuna” points to a person; the English gender depends on the situation."
      }
    ]
  },
  {
    "id": "family-1",
    "unitId": "unit-family",
    "unitTitle": "Unit 3: Family",
    "lessonTitle": "Family Members",
    "description": "Learn common family vocabulary with respectful, everyday words.",
    "orderIndex": 5,
    "xpReward": 10,
    "stage": "People",
    "skillTags": [
      "Family",
      "Vocabulary",
      "People"
    ],
    "questions": [
      {
        "id": "family-1-q1",
        "type": "multiple-choice",
        "prompt": "What does “ina” mean?",
        "choices": [
          "mother",
          "father",
          "friend"
        ],
        "correctAnswer": "mother",
        "explanation": "“Ina” means “mother.”"
      },
      {
        "id": "family-1-q2",
        "type": "multiple-choice",
        "prompt": "What does “ama” mean?",
        "choices": [
          "father",
          "mother",
          "child"
        ],
        "correctAnswer": "father",
        "explanation": "“Ama” means “father.”"
      },
      {
        "id": "family-1-q3",
        "type": "multiple-choice",
        "prompt": "What does “kabsat” mean?",
        "choices": [
          "sibling",
          "water",
          "market"
        ],
        "correctAnswer": "sibling",
        "explanation": "“Kabsat” can mean sibling, brother, or sister."
      },
      {
        "id": "family-1-q4",
        "type": "multiple-choice",
        "prompt": "What does “anak” mean?",
        "choices": [
          "child",
          "teacher",
          "morning"
        ],
        "correctAnswer": "child",
        "explanation": "“Anak” means “child.”"
      },
      {
        "id": "family-1-q5",
        "type": "multiple-choice",
        "prompt": "What does “pamilya” mean?",
        "choices": [
          "family",
          "food",
          "color"
        ],
        "correctAnswer": "family",
        "explanation": "“Pamilya” means “family.”"
      },
      {
        "id": "family-1-q6",
        "type": "multiple-choice",
        "prompt": "What does “gayyem” mean?",
        "choices": [
          "friend",
          "father",
          "left"
        ],
        "correctAnswer": "friend",
        "explanation": "“Gayyem” means “friend.”"
      },
      {
        "id": "family-1-q7",
        "type": "multiple-choice",
        "prompt": "What does “apong a lalaki” mean?",
        "choices": [
          "grandfather",
          "grandmother",
          "sibling"
        ],
        "correctAnswer": "grandfather",
        "explanation": "Literally, “apong a lalaki” points to a male grandparent."
      },
      {
        "id": "family-1-q8",
        "type": "multiple-choice",
        "prompt": "What does “apong a babai” mean?",
        "choices": [
          "grandmother",
          "grandfather",
          "child"
        ],
        "correctAnswer": "grandmother",
        "explanation": "Literally, “apong a babai” points to a female grandparent."
      },
      {
        "id": "family-1-q9",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Ni Maria ti inak.",
        "correctAnswer": "Maria is my mother",
        "acceptedAnswers": [
          "maria is my mother",
          "maria is my mom"
        ],
        "explanation": "“Inak” means “my mother.”"
      },
      {
        "id": "family-1-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Ni Juan ti amak.",
        "correctAnswer": "Juan is my father",
        "acceptedAnswers": [
          "juan is my father",
          "juan is my dad"
        ],
        "explanation": "“Amak” means “my father.”"
      }
    ]
  },
  {
    "id": "family-2",
    "unitId": "unit-family",
    "unitTitle": "Unit 3: Family",
    "lessonTitle": "My Family Sentences",
    "description": "Use family words inside simple sentences about people close to you.",
    "orderIndex": 6,
    "xpReward": 12,
    "stage": "People",
    "skillTags": [
      "Family",
      "Sentences",
      "Possession"
    ],
    "questions": [
      {
        "id": "family-2-q1",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Pamilyak daytoy.",
        "correctAnswer": "This is my family",
        "acceptedAnswers": [
          "this is my family"
        ],
        "explanation": "“Pamilyak” means “my family,” and “daytoy” means “this.”"
      },
      {
        "id": "family-2-q2",
        "type": "multiple-choice",
        "prompt": "Choose the best translation of “pamilyak.”",
        "choices": [
          "my family",
          "my food",
          "my school"
        ],
        "correctAnswer": "my family",
        "explanation": "The ending “-k” can mark “my” in this beginner pattern."
      },
      {
        "id": "family-2-q3",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kabsatko ni Ana.",
        "correctAnswer": "Ana is my sibling",
        "acceptedAnswers": [
          "ana is my sibling",
          "ana is my sister",
          "ana is my brother"
        ],
        "explanation": "“Kabsatko” means “my sibling.”"
      },
      {
        "id": "family-2-q4",
        "type": "multiple-choice",
        "prompt": "What does “gayyemko” mean?",
        "choices": [
          "my friend",
          "my father",
          "my water"
        ],
        "correctAnswer": "my friend",
        "explanation": "“Gayyemko” means “my friend.”"
      },
      {
        "id": "family-2-q5",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Nasayaat ti pamilyak.",
        "correctAnswer": "My family is good",
        "acceptedAnswers": [
          "my family is good",
          "my family is fine"
        ],
        "explanation": "“Nasayaat” means good or fine."
      },
      {
        "id": "family-2-q6",
        "type": "multiple-choice",
        "prompt": "Which sentence means “This is my mother”?",
        "choices": [
          "Daytoy ti inak.",
          "Daytoy ti kanen.",
          "Daytoy ti kannawan."
        ],
        "correctAnswer": "Daytoy ti inak.",
        "explanation": "“Daytoy ti...” means “This is the/this is my...” depending on the noun pattern."
      },
      {
        "id": "family-2-q7",
        "type": "multiple-choice",
        "prompt": "Which sentence means “This is my father”?",
        "choices": [
          "Daytoy ti amak.",
          "Daytoy ti danum.",
          "Daytoy ti berde."
        ],
        "correctAnswer": "Daytoy ti amak.",
        "explanation": "“Amak” means “my father.”"
      },
      {
        "id": "family-2-q8",
        "type": "multiple-choice",
        "prompt": "What does “anakko” mean?",
        "choices": [
          "my child",
          "my sibling",
          "my color"
        ],
        "correctAnswer": "my child",
        "explanation": "“Anakko” means “my child.”"
      },
      {
        "id": "family-2-q9",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agyamanak, Ina.",
        "correctAnswer": "Thank you, Mother",
        "acceptedAnswers": [
          "thank you mother",
          "thank you, mother",
          "thank you mom",
          "thank you, mom"
        ],
        "explanation": "This combines gratitude with a family word."
      },
      {
        "id": "family-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kumusta ka, Kabsat?",
        "correctAnswer": "How are you, sibling?",
        "acceptedAnswers": [
          "how are you sibling",
          "how are you, sibling",
          "how are you brother",
          "how are you sister"
        ],
        "explanation": "“Kabsat” is often used warmly for sibling, brother, or sister."
      }
    ]
  },
  {
    "id": "numbers-1",
    "unitId": "unit-numbers",
    "unitTitle": "Unit 4: Counting",
    "lessonTitle": "Numbers 1–10",
    "description": "Master the first ten numbers for counting people, objects, and answers.",
    "orderIndex": 7,
    "xpReward": 10,
    "stage": "Daily Life",
    "skillTags": [
      "Numbers",
      "Counting",
      "Vocabulary"
    ],
    "questions": [
      {
        "id": "numbers-1-q1",
        "type": "multiple-choice",
        "prompt": "What number is “maysa”?",
        "choices": [
          "1",
          "2",
          "3"
        ],
        "correctAnswer": "1",
        "explanation": "“Maysa” means one."
      },
      {
        "id": "numbers-1-q2",
        "type": "multiple-choice",
        "prompt": "What number is “dua”?",
        "choices": [
          "2",
          "4",
          "6"
        ],
        "correctAnswer": "2",
        "explanation": "“Dua” means two."
      },
      {
        "id": "numbers-1-q3",
        "type": "multiple-choice",
        "prompt": "What number is “tallo”?",
        "choices": [
          "3",
          "7",
          "10"
        ],
        "correctAnswer": "3",
        "explanation": "“Tallo” means three."
      },
      {
        "id": "numbers-1-q4",
        "type": "multiple-choice",
        "prompt": "What number is “uppat”?",
        "choices": [
          "4",
          "1",
          "9"
        ],
        "correctAnswer": "4",
        "explanation": "“Uppat” means four."
      },
      {
        "id": "numbers-1-q5",
        "type": "multiple-choice",
        "prompt": "What number is “lima”?",
        "choices": [
          "5",
          "8",
          "2"
        ],
        "correctAnswer": "5",
        "explanation": "“Lima” means five."
      },
      {
        "id": "numbers-1-q6",
        "type": "multiple-choice",
        "prompt": "What number is “innem”?",
        "choices": [
          "6",
          "3",
          "10"
        ],
        "correctAnswer": "6",
        "explanation": "“Innem” means six."
      },
      {
        "id": "numbers-1-q7",
        "type": "multiple-choice",
        "prompt": "What number is “pito”?",
        "choices": [
          "7",
          "4",
          "9"
        ],
        "correctAnswer": "7",
        "explanation": "“Pito” means seven."
      },
      {
        "id": "numbers-1-q8",
        "type": "multiple-choice",
        "prompt": "What number is “walo”?",
        "choices": [
          "8",
          "2",
          "5"
        ],
        "correctAnswer": "8",
        "explanation": "“Walo” means eight."
      },
      {
        "id": "numbers-1-q9",
        "type": "multiple-choice",
        "prompt": "What number is “siam”?",
        "choices": [
          "9",
          "6",
          "1"
        ],
        "correctAnswer": "9",
        "explanation": "“Siam” means nine."
      },
      {
        "id": "numbers-1-q10",
        "type": "multiple-choice",
        "prompt": "What number is “sangapulo”?",
        "choices": [
          "10",
          "7",
          "3"
        ],
        "correctAnswer": "10",
        "explanation": "“Sangapulo” means ten."
      }
    ]
  },
  {
    "id": "numbers-2",
    "unitId": "unit-numbers",
    "unitTitle": "Unit 4: Counting",
    "lessonTitle": "Age and Quantity",
    "description": "Use numbers in short phrases for age, objects, and everyday quantity.",
    "orderIndex": 8,
    "xpReward": 12,
    "stage": "Daily Life",
    "skillTags": [
      "Age",
      "Quantity",
      "Short phrases"
    ],
    "questions": [
      {
        "id": "numbers-2-q1",
        "type": "multiple-choice",
        "prompt": "What does “Mano?” ask?",
        "choices": [
          "How many?",
          "Where?",
          "Who?"
        ],
        "correctAnswer": "How many?",
        "explanation": "“Mano?” asks “How many?” or “How much?” depending on context."
      },
      {
        "id": "numbers-2-q2",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Mano ti tawenmo?",
        "correctAnswer": "How old are you?",
        "acceptedAnswers": [
          "how old are you",
          "how old are you?"
        ],
        "explanation": "This phrase asks for someone's age."
      },
      {
        "id": "numbers-2-q3",
        "type": "multiple-choice",
        "prompt": "What does “dua a libro” mean?",
        "choices": [
          "two books",
          "one book",
          "ten books"
        ],
        "correctAnswer": "two books",
        "explanation": "“Dua” means two, and “libro” means book."
      },
      {
        "id": "numbers-2-q4",
        "type": "multiple-choice",
        "prompt": "What does “tallo a gayyem” mean?",
        "choices": [
          "three friends",
          "three colors",
          "three houses"
        ],
        "correctAnswer": "three friends",
        "explanation": "“Gayyem” means friend."
      },
      {
        "id": "numbers-2-q5",
        "type": "multiple-choice",
        "prompt": "What does “adu” mean?",
        "choices": [
          "many",
          "left",
          "blue"
        ],
        "correctAnswer": "many",
        "explanation": "“Adu” means many or much."
      },
      {
        "id": "numbers-2-q6",
        "type": "multiple-choice",
        "prompt": "What does “bassit” mean?",
        "choices": [
          "few / small",
          "many",
          "tomorrow"
        ],
        "correctAnswer": "few / small",
        "explanation": "“Bassit” can mean small or few, depending on context."
      },
      {
        "id": "numbers-2-q7",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Lima ti kabsatko.",
        "correctAnswer": "I have five siblings",
        "acceptedAnswers": [
          "i have five siblings",
          "my siblings are five",
          "five are my siblings"
        ],
        "explanation": "This sentence says the number of siblings."
      },
      {
        "id": "numbers-2-q8",
        "type": "multiple-choice",
        "prompt": "Choose the Ilokano word for “ten.”",
        "choices": [
          "sangapulo",
          "maysa",
          "walo"
        ],
        "correctAnswer": "sangapulo",
        "explanation": "“Sangapulo” means ten."
      },
      {
        "id": "numbers-2-q9",
        "type": "multiple-choice",
        "prompt": "What is the best meaning of “maysa a balay”?",
        "choices": [
          "one house",
          "one morning",
          "one family"
        ],
        "correctAnswer": "one house",
        "explanation": "“Balay” means house."
      },
      {
        "id": "numbers-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Adu ti gayyemko.",
        "correctAnswer": "I have many friends",
        "acceptedAnswers": [
          "i have many friends",
          "many are my friends",
          "my friends are many"
        ],
        "explanation": "“Adu” means many, and “gayyemko” means my friends/my friend depending on context."
      }
    ]
  },
  {
    "id": "colors-1",
    "unitId": "unit-colors",
    "unitTitle": "Unit 5: Colors & Descriptions",
    "lessonTitle": "Common Colors",
    "description": "Learn color words that help describe clothing, objects, and everyday surroundings.",
    "orderIndex": 9,
    "xpReward": 10,
    "stage": "Description",
    "skillTags": [
      "Colors",
      "Adjectives",
      "Vocabulary"
    ],
    "questions": [
      {
        "id": "colors-1-q1",
        "type": "multiple-choice",
        "prompt": "What color is “nalabaga”?",
        "choices": [
          "red",
          "white",
          "black"
        ],
        "correctAnswer": "red",
        "explanation": "“Nalabaga” means red."
      },
      {
        "id": "colors-1-q2",
        "type": "multiple-choice",
        "prompt": "What color is “puraw”?",
        "choices": [
          "white",
          "green",
          "blue"
        ],
        "correctAnswer": "white",
        "explanation": "“Puraw” means white."
      },
      {
        "id": "colors-1-q3",
        "type": "multiple-choice",
        "prompt": "What color is “nangisit”?",
        "choices": [
          "black",
          "red",
          "yellow"
        ],
        "correctAnswer": "black",
        "explanation": "“Nangisit” means black."
      },
      {
        "id": "colors-1-q4",
        "type": "multiple-choice",
        "prompt": "Which word is commonly used for “blue”?",
        "choices": [
          "asul",
          "maysa",
          "ina"
        ],
        "correctAnswer": "asul",
        "explanation": "“Asul” is commonly used for blue."
      },
      {
        "id": "colors-1-q5",
        "type": "multiple-choice",
        "prompt": "Which word is commonly used for “green”?",
        "choices": [
          "berde",
          "sadino",
          "ama"
        ],
        "correctAnswer": "berde",
        "explanation": "“Berde” is commonly used for green."
      },
      {
        "id": "colors-1-q6",
        "type": "multiple-choice",
        "prompt": "Which word can mean “yellow”?",
        "choices": [
          "duyaw",
          "kannigid",
          "rabii"
        ],
        "correctAnswer": "duyaw",
        "explanation": "“Duyaw” can mean yellow."
      },
      {
        "id": "colors-1-q7",
        "type": "multiple-choice",
        "prompt": "What does “dakkel” mean?",
        "choices": [
          "big",
          "small",
          "hungry"
        ],
        "correctAnswer": "big",
        "explanation": "“Dakkel” means big."
      },
      {
        "id": "colors-1-q8",
        "type": "multiple-choice",
        "prompt": "What does “bassit” mean here?",
        "choices": [
          "small",
          "many",
          "tomorrow"
        ],
        "correctAnswer": "small",
        "explanation": "“Bassit” can describe something small."
      },
      {
        "id": "colors-1-q9",
        "type": "multiple-choice",
        "prompt": "What does “napintas” mean?",
        "choices": [
          "beautiful",
          "left",
          "water"
        ],
        "correctAnswer": "beautiful",
        "explanation": "“Napintas” means beautiful."
      },
      {
        "id": "colors-1-q10",
        "type": "multiple-choice",
        "prompt": "What does “nalamiis” mean?",
        "choices": [
          "cold",
          "red",
          "ten"
        ],
        "correctAnswer": "cold",
        "explanation": "“Nalamiis” means cold."
      }
    ]
  },
  {
    "id": "colors-2",
    "unitId": "unit-colors",
    "unitTitle": "Unit 5: Colors & Descriptions",
    "lessonTitle": "Describe It",
    "description": "Connect colors and adjectives to short, natural sentences.",
    "orderIndex": 10,
    "xpReward": 12,
    "stage": "Description",
    "skillTags": [
      "Colors",
      "Sentences",
      "Description"
    ],
    "questions": [
      {
        "id": "colors-2-q1",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Nalabaga ti bado.",
        "correctAnswer": "The shirt is red",
        "acceptedAnswers": [
          "the shirt is red",
          "the clothes are red",
          "the clothing is red"
        ],
        "explanation": "“Bado” can mean shirt or clothes; “nalabaga” means red."
      },
      {
        "id": "colors-2-q2",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Puraw ti balay.",
        "correctAnswer": "The house is white",
        "acceptedAnswers": [
          "the house is white"
        ],
        "explanation": "“Puraw” means white, and “balay” means house."
      },
      {
        "id": "colors-2-q3",
        "type": "multiple-choice",
        "prompt": "What does “Nangisit ti aso” mean?",
        "choices": [
          "The dog is black",
          "The dog is white",
          "The dog is small"
        ],
        "correctAnswer": "The dog is black",
        "explanation": "“Nangisit” means black."
      },
      {
        "id": "colors-2-q4",
        "type": "multiple-choice",
        "prompt": "Which sentence means “The book is blue”?",
        "choices": [
          "Asul ti libro.",
          "Maysa ti libro.",
          "Mabisinak."
        ],
        "correctAnswer": "Asul ti libro.",
        "explanation": "“Asul” means blue, and “libro” means book."
      },
      {
        "id": "colors-2-q5",
        "type": "multiple-choice",
        "prompt": "Which sentence means “The vegetable is green”?",
        "choices": [
          "Berde ti nateng.",
          "Rabii ti nateng.",
          "Ama ti nateng."
        ],
        "correctAnswer": "Berde ti nateng.",
        "explanation": "“Berde” means green, and “nateng” means vegetable."
      },
      {
        "id": "colors-2-q6",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Dakkel ti eskuelaan.",
        "correctAnswer": "The school is big",
        "acceptedAnswers": [
          "the school is big",
          "the school is large"
        ],
        "explanation": "“Dakkel” means big."
      },
      {
        "id": "colors-2-q7",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Bassit ti balay.",
        "correctAnswer": "The house is small",
        "acceptedAnswers": [
          "the house is small"
        ],
        "explanation": "“Bassit” means small in this sentence."
      },
      {
        "id": "colors-2-q8",
        "type": "multiple-choice",
        "prompt": "Choose the best meaning of “Napintas ti bado.”",
        "choices": [
          "The shirt is beautiful",
          "The shirt is hungry",
          "The shirt is tomorrow"
        ],
        "correctAnswer": "The shirt is beautiful",
        "explanation": "“Napintas” means beautiful."
      },
      {
        "id": "colors-2-q9",
        "type": "multiple-choice",
        "prompt": "Choose the best meaning of “Nalamiis ti danum.”",
        "choices": [
          "The water is cold",
          "The water is red",
          "The water is many"
        ],
        "correctAnswer": "The water is cold",
        "explanation": "“Nalamiis” means cold."
      },
      {
        "id": "colors-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Nasayaat daytoy.",
        "correctAnswer": "This is good",
        "acceptedAnswers": [
          "this is good",
          "this is fine",
          "this is okay"
        ],
        "explanation": "“Daytoy” means this; “nasayaat” means good or fine."
      }
    ]
  },
  {
    "id": "time-1",
    "unitId": "unit-time",
    "unitTitle": "Unit 6: Time & Days",
    "lessonTitle": "Morning, Afternoon, Night",
    "description": "Learn time-of-day words and connect them to greetings and daily routine.",
    "orderIndex": 11,
    "xpReward": 10,
    "stage": "Daily Life",
    "skillTags": [
      "Time",
      "Routine",
      "Greetings"
    ],
    "questions": [
      {
        "id": "time-1-q1",
        "type": "multiple-choice",
        "prompt": "What does “bigat” mean?",
        "choices": [
          "morning",
          "night",
          "water"
        ],
        "correctAnswer": "morning",
        "explanation": "“Bigat” means morning."
      },
      {
        "id": "time-1-q2",
        "type": "multiple-choice",
        "prompt": "What does “malem” mean?",
        "choices": [
          "afternoon",
          "morning",
          "sibling"
        ],
        "correctAnswer": "afternoon",
        "explanation": "“Malem” refers to afternoon."
      },
      {
        "id": "time-1-q3",
        "type": "multiple-choice",
        "prompt": "What does “rabii” mean?",
        "choices": [
          "night / evening",
          "market",
          "green"
        ],
        "correctAnswer": "night / evening",
        "explanation": "“Rabii” refers to evening or night."
      },
      {
        "id": "time-1-q4",
        "type": "multiple-choice",
        "prompt": "What does “aldaw” mean?",
        "choices": [
          "day",
          "fish",
          "left"
        ],
        "correctAnswer": "day",
        "explanation": "“Aldaw” means day."
      },
      {
        "id": "time-1-q5",
        "type": "multiple-choice",
        "prompt": "Which phrase means “Good morning”?",
        "choices": [
          "Naimbag a bigat",
          "Naimbag a rabii",
          "Saan"
        ],
        "correctAnswer": "Naimbag a bigat",
        "explanation": "This combines “naimbag” with “bigat.”"
      },
      {
        "id": "time-1-q6",
        "type": "multiple-choice",
        "prompt": "Which phrase means “Good afternoon”?",
        "choices": [
          "Naimbag a malem",
          "Naimbag a bigat",
          "Agannad ka"
        ],
        "correctAnswer": "Naimbag a malem",
        "explanation": "This combines “naimbag” with “malem.”"
      },
      {
        "id": "time-1-q7",
        "type": "multiple-choice",
        "prompt": "Which phrase means “Good evening”?",
        "choices": [
          "Naimbag a rabii",
          "Mano?",
          "Berde ti nateng"
        ],
        "correctAnswer": "Naimbag a rabii",
        "explanation": "This combines “naimbag” with “rabii.”"
      },
      {
        "id": "time-1-q8",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Manganak iti bigat.",
        "correctAnswer": "I eat in the morning",
        "acceptedAnswers": [
          "i eat in the morning",
          "i am eating in the morning"
        ],
        "explanation": "“Iti bigat” means “in the morning.”"
      },
      {
        "id": "time-1-q9",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agadalak iti rabii.",
        "correctAnswer": "I study at night",
        "acceptedAnswers": [
          "i study at night",
          "i am studying at night",
          "i study in the evening"
        ],
        "explanation": "“Iti rabii” means “at night” or “in the evening.”"
      },
      {
        "id": "time-1-q10",
        "type": "multiple-choice",
        "prompt": "What does “oras” mean?",
        "choices": [
          "time / hour",
          "house",
          "friend"
        ],
        "correctAnswer": "time / hour",
        "explanation": "“Oras” is used for time or hour."
      }
    ]
  },
  {
    "id": "time-2",
    "unitId": "unit-time",
    "unitTitle": "Unit 6: Time & Days",
    "lessonTitle": "Today, Yesterday, Tomorrow",
    "description": "Practice simple time words for talking about when things happen.",
    "orderIndex": 12,
    "xpReward": 12,
    "stage": "Daily Life",
    "skillTags": [
      "Time",
      "Days",
      "Conversation"
    ],
    "questions": [
      {
        "id": "time-2-q1",
        "type": "multiple-choice",
        "prompt": "What does “ita” mean?",
        "choices": [
          "now",
          "yesterday",
          "ten"
        ],
        "correctAnswer": "now",
        "explanation": "“Ita” means now."
      },
      {
        "id": "time-2-q2",
        "type": "multiple-choice",
        "prompt": "What does “ita nga aldaw” mean?",
        "choices": [
          "today",
          "tomorrow",
          "left"
        ],
        "correctAnswer": "today",
        "explanation": "“Ita nga aldaw” means today."
      },
      {
        "id": "time-2-q3",
        "type": "multiple-choice",
        "prompt": "What does “idi kalman” mean?",
        "choices": [
          "yesterday",
          "tomorrow",
          "morning"
        ],
        "correctAnswer": "yesterday",
        "explanation": "“Idi kalman” means yesterday."
      },
      {
        "id": "time-2-q4",
        "type": "multiple-choice",
        "prompt": "What does “inton bigat” mean?",
        "choices": [
          "tomorrow",
          "yesterday",
          "red"
        ],
        "correctAnswer": "tomorrow",
        "explanation": "“Inton bigat” means tomorrow."
      },
      {
        "id": "time-2-q5",
        "type": "multiple-choice",
        "prompt": "What does “agsapa” mean?",
        "choices": [
          "early",
          "many",
          "hungry"
        ],
        "correctAnswer": "early",
        "explanation": "“Agsapa” means early."
      },
      {
        "id": "time-2-q6",
        "type": "multiple-choice",
        "prompt": "What does “naladaw” mean?",
        "choices": [
          "late",
          "blue",
          "one"
        ],
        "correctAnswer": "late",
        "explanation": "“Naladaw” means late."
      },
      {
        "id": "time-2-q7",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agadalak ita.",
        "correctAnswer": "I am studying now",
        "acceptedAnswers": [
          "i am studying now",
          "i study now"
        ],
        "explanation": "“Ita” means now."
      },
      {
        "id": "time-2-q8",
        "type": "multiple-choice",
        "prompt": "Choose the best translation of “Manganak inton bigat.”",
        "choices": [
          "I will eat tomorrow",
          "I ate yesterday",
          "I am red"
        ],
        "correctAnswer": "I will eat tomorrow",
        "explanation": "“Inton bigat” points to tomorrow."
      },
      {
        "id": "time-2-q9",
        "type": "multiple-choice",
        "prompt": "Choose the best translation of “Mapanak idi kalman.”",
        "choices": [
          "I went yesterday",
          "I will go tomorrow",
          "I am small"
        ],
        "correctAnswer": "I went yesterday",
        "explanation": "“Idi kalman” points to yesterday."
      },
      {
        "id": "time-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Naimbag nga aldaw.",
        "correctAnswer": "Good day",
        "acceptedAnswers": [
          "good day",
          "good afternoon",
          "good morning"
        ],
        "explanation": "“Naimbag nga aldaw” is a general greeting meaning “Good day.”"
      }
    ]
  },
  {
    "id": "food-1",
    "unitId": "unit-food",
    "unitTitle": "Unit 7: Food & Needs",
    "lessonTitle": "Food and Needs",
    "description": "Learn basic food words and phrases for hunger, thirst, and wanting something.",
    "orderIndex": 13,
    "xpReward": 10,
    "stage": "Daily Life",
    "skillTags": [
      "Food",
      "Needs",
      "Vocabulary"
    ],
    "questions": [
      {
        "id": "food-1-q1",
        "type": "multiple-choice",
        "prompt": "What does “mangan” mean?",
        "choices": [
          "to eat",
          "to sleep",
          "to write"
        ],
        "correctAnswer": "to eat",
        "explanation": "“Mangan” means to eat."
      },
      {
        "id": "food-1-q2",
        "type": "multiple-choice",
        "prompt": "What does “danum” mean?",
        "choices": [
          "water",
          "rice",
          "fish"
        ],
        "correctAnswer": "water",
        "explanation": "“Danum” means water."
      },
      {
        "id": "food-1-q3",
        "type": "multiple-choice",
        "prompt": "What does “kanen” commonly refer to?",
        "choices": [
          "rice / food",
          "friend",
          "school"
        ],
        "correctAnswer": "rice / food",
        "explanation": "“Kanen” commonly refers to cooked rice or food."
      },
      {
        "id": "food-1-q4",
        "type": "multiple-choice",
        "prompt": "What does “ikan” mean?",
        "choices": [
          "fish",
          "water",
          "book"
        ],
        "correctAnswer": "fish",
        "explanation": "“Ikan” means fish."
      },
      {
        "id": "food-1-q5",
        "type": "multiple-choice",
        "prompt": "What does “nateng” mean?",
        "choices": [
          "vegetable",
          "day",
          "left"
        ],
        "correctAnswer": "vegetable",
        "explanation": "“Nateng” means vegetable."
      },
      {
        "id": "food-1-q6",
        "type": "multiple-choice",
        "prompt": "What does “karne” mean?",
        "choices": [
          "meat",
          "morning",
          "family"
        ],
        "correctAnswer": "meat",
        "explanation": "“Karne” means meat."
      },
      {
        "id": "food-1-q7",
        "type": "multiple-choice",
        "prompt": "What does “tinapay” mean?",
        "choices": [
          "bread",
          "market",
          "blue"
        ],
        "correctAnswer": "bread",
        "explanation": "“Tinapay” means bread."
      },
      {
        "id": "food-1-q8",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Mabisinak.",
        "correctAnswer": "I am hungry",
        "acceptedAnswers": [
          "i am hungry",
          "i'm hungry",
          "im hungry"
        ],
        "explanation": "“Mabisinak” means “I am hungry.”"
      },
      {
        "id": "food-1-q9",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Nauhawak.",
        "correctAnswer": "I am thirsty",
        "acceptedAnswers": [
          "i am thirsty",
          "i'm thirsty",
          "im thirsty"
        ],
        "explanation": "“Nauhawak” means “I am thirsty.”"
      },
      {
        "id": "food-1-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kayatko ti danum.",
        "correctAnswer": "I want water",
        "acceptedAnswers": [
          "i want water",
          "i would like water"
        ],
        "explanation": "“Kayatko” means “I want” or “I like.”"
      }
    ]
  },
  {
    "id": "food-2",
    "unitId": "unit-food",
    "unitTitle": "Unit 7: Food & Needs",
    "lessonTitle": "At the Table",
    "description": "Practice polite and natural phrases for eating with family and friends.",
    "orderIndex": 14,
    "xpReward": 12,
    "stage": "Daily Life",
    "skillTags": [
      "Food",
      "Polite requests",
      "Sentences"
    ],
    "questions": [
      {
        "id": "food-2-q1",
        "type": "multiple-choice",
        "prompt": "What does “Mangan tayon” mean?",
        "choices": [
          "Let’s eat now",
          "Let’s sleep now",
          "Let’s go left"
        ],
        "correctAnswer": "Let’s eat now",
        "explanation": "“Tayon” makes it feel like “let us/let’s.”"
      },
      {
        "id": "food-2-q2",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kayatko ti kanen.",
        "correctAnswer": "I want rice",
        "acceptedAnswers": [
          "i want rice",
          "i want food"
        ],
        "explanation": "“Kanen” commonly refers to cooked rice or food."
      },
      {
        "id": "food-2-q3",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kayatko ti ikan.",
        "correctAnswer": "I want fish",
        "acceptedAnswers": [
          "i want fish",
          "i would like fish"
        ],
        "explanation": "“Ikan” means fish."
      },
      {
        "id": "food-2-q4",
        "type": "multiple-choice",
        "prompt": "Which phrase means “I want vegetables”?",
        "choices": [
          "Kayatko ti nateng.",
          "Kayatko ti rabii.",
          "Sadino ti nateng?"
        ],
        "correctAnswer": "Kayatko ti nateng.",
        "explanation": "“Nateng” means vegetables."
      },
      {
        "id": "food-2-q5",
        "type": "multiple-choice",
        "prompt": "Which phrase means “The water is cold”?",
        "choices": [
          "Nalamiis ti danum.",
          "Nalabaga ti danum.",
          "Dua ti danum."
        ],
        "correctAnswer": "Nalamiis ti danum.",
        "explanation": "“Nalamiis” means cold."
      },
      {
        "id": "food-2-q6",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agyamanak iti kanen.",
        "correctAnswer": "Thank you for the food",
        "acceptedAnswers": [
          "thank you for the food",
          "thank you for the rice"
        ],
        "explanation": "“Agyamanak” means thank you."
      },
      {
        "id": "food-2-q7",
        "type": "multiple-choice",
        "prompt": "Best response after someone gives you food?",
        "choices": [
          "Agyamanak.",
          "Saan.",
          "Sadino?"
        ],
        "correctAnswer": "Agyamanak.",
        "explanation": "A simple “Agyamanak” is polite and natural."
      },
      {
        "id": "food-2-q8",
        "type": "multiple-choice",
        "prompt": "What does “kape” mean?",
        "choices": [
          "coffee",
          "school",
          "father"
        ],
        "correctAnswer": "coffee",
        "explanation": "“Kape” means coffee."
      },
      {
        "id": "food-2-q9",
        "type": "multiple-choice",
        "prompt": "What does “gatas” mean?",
        "choices": [
          "milk",
          "meat",
          "road"
        ],
        "correctAnswer": "milk",
        "explanation": "“Gatas” means milk."
      },
      {
        "id": "food-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Manganak iti balay.",
        "correctAnswer": "I eat at home",
        "acceptedAnswers": [
          "i eat at home",
          "i am eating at home"
        ],
        "explanation": "“Balay” means house/home."
      }
    ]
  },
  {
    "id": "places-1",
    "unitId": "unit-places",
    "unitTitle": "Unit 8: Places & Directions",
    "lessonTitle": "Places Around Town",
    "description": "Learn common places learners can recognize in family, school, and community life.",
    "orderIndex": 15,
    "xpReward": 10,
    "stage": "Navigation",
    "skillTags": [
      "Places",
      "Vocabulary",
      "Community"
    ],
    "questions": [
      {
        "id": "places-1-q1",
        "type": "multiple-choice",
        "prompt": "What does “balay” mean?",
        "choices": [
          "house / home",
          "school",
          "market"
        ],
        "correctAnswer": "house / home",
        "explanation": "“Balay” means house or home."
      },
      {
        "id": "places-1-q2",
        "type": "multiple-choice",
        "prompt": "What does “eskuelaan” mean?",
        "choices": [
          "school",
          "house",
          "food"
        ],
        "correctAnswer": "school",
        "explanation": "“Eskuelaan” means school."
      },
      {
        "id": "places-1-q3",
        "type": "multiple-choice",
        "prompt": "What does “merkado” mean?",
        "choices": [
          "market",
          "friend",
          "ten"
        ],
        "correctAnswer": "market",
        "explanation": "“Merkado” means market."
      },
      {
        "id": "places-1-q4",
        "type": "multiple-choice",
        "prompt": "What does “iglesia” mean?",
        "choices": [
          "church",
          "water",
          "green"
        ],
        "correctAnswer": "church",
        "explanation": "“Iglesia” means church."
      },
      {
        "id": "places-1-q5",
        "type": "multiple-choice",
        "prompt": "What does “ospital” mean?",
        "choices": [
          "hospital",
          "book",
          "morning"
        ],
        "correctAnswer": "hospital",
        "explanation": "“Ospital” means hospital."
      },
      {
        "id": "places-1-q6",
        "type": "multiple-choice",
        "prompt": "What does “dalan” mean?",
        "choices": [
          "road / street",
          "child",
          "fish"
        ],
        "correctAnswer": "road / street",
        "explanation": "“Dalan” means road or street."
      },
      {
        "id": "places-1-q7",
        "type": "multiple-choice",
        "prompt": "What does “kuarto” mean?",
        "choices": [
          "room",
          "water",
          "ten"
        ],
        "correctAnswer": "room",
        "explanation": "“Kuarto” means room."
      },
      {
        "id": "places-1-q8",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Addaak iti balay.",
        "correctAnswer": "I am at home",
        "acceptedAnswers": [
          "i am at home",
          "i am in the house",
          "i'm at home"
        ],
        "explanation": "“Addaak” means “I am/I am located,” and “balay” means home."
      },
      {
        "id": "places-1-q9",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Mapanak idiay eskuelaan.",
        "correctAnswer": "I am going to school",
        "acceptedAnswers": [
          "i am going to school",
          "i go to school",
          "i will go to school"
        ],
        "explanation": "“Mapanak” means I go/I am going."
      },
      {
        "id": "places-1-q10",
        "type": "multiple-choice",
        "prompt": "Which word is a place?",
        "choices": [
          "merkado",
          "sangapulo",
          "nalabaga"
        ],
        "correctAnswer": "merkado",
        "explanation": "“Merkado” is a place: the market."
      }
    ]
  },
  {
    "id": "places-2",
    "unitId": "unit-places",
    "unitTitle": "Unit 8: Places & Directions",
    "lessonTitle": "Directions and Where",
    "description": "Ask where something is and understand basic direction words.",
    "orderIndex": 16,
    "xpReward": 12,
    "stage": "Navigation",
    "skillTags": [
      "Directions",
      "Questions",
      "Where"
    ],
    "questions": [
      {
        "id": "places-2-q1",
        "type": "multiple-choice",
        "prompt": "What does “sadino” mean?",
        "choices": [
          "where",
          "when",
          "who"
        ],
        "correctAnswer": "where",
        "explanation": "“Sadino” means where."
      },
      {
        "id": "places-2-q2",
        "type": "multiple-choice",
        "prompt": "What does “kannawan” mean?",
        "choices": [
          "right",
          "left",
          "front"
        ],
        "correctAnswer": "right",
        "explanation": "“Kannawan” means right."
      },
      {
        "id": "places-2-q3",
        "type": "multiple-choice",
        "prompt": "What does “kannigid” mean?",
        "choices": [
          "left",
          "right",
          "today"
        ],
        "correctAnswer": "left",
        "explanation": "“Kannigid” means left."
      },
      {
        "id": "places-2-q4",
        "type": "multiple-choice",
        "prompt": "What does “asideg” mean?",
        "choices": [
          "near",
          "far",
          "hungry"
        ],
        "correctAnswer": "near",
        "explanation": "“Asideg” means near."
      },
      {
        "id": "places-2-q5",
        "type": "multiple-choice",
        "prompt": "What does “adayo” mean?",
        "choices": [
          "far",
          "near",
          "red"
        ],
        "correctAnswer": "far",
        "explanation": "“Adayo” means far."
      },
      {
        "id": "places-2-q6",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Sadino ti eskuelaan?",
        "correctAnswer": "Where is the school?",
        "acceptedAnswers": [
          "where is the school",
          "where is the school?"
        ],
        "explanation": "“Sadino” means where, and “eskuelaan” means school."
      },
      {
        "id": "places-2-q7",
        "type": "multiple-choice",
        "prompt": "Choose the best meaning of “Adda iti kannawan.”",
        "choices": [
          "It is on the right",
          "It is on the left",
          "It is tomorrow"
        ],
        "correctAnswer": "It is on the right",
        "explanation": "“Kannawan” means right."
      },
      {
        "id": "places-2-q8",
        "type": "multiple-choice",
        "prompt": "Choose the best meaning of “Adda iti kannigid.”",
        "choices": [
          "It is on the left",
          "It is on the right",
          "It is blue"
        ],
        "correctAnswer": "It is on the left",
        "explanation": "“Kannigid” means left."
      },
      {
        "id": "places-2-q9",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Asideg ti merkado.",
        "correctAnswer": "The market is near",
        "acceptedAnswers": [
          "the market is near",
          "the market is close"
        ],
        "explanation": "“Asideg” means near."
      },
      {
        "id": "places-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Adayo ti ospital.",
        "correctAnswer": "The hospital is far",
        "acceptedAnswers": [
          "the hospital is far",
          "the hospital is far away"
        ],
        "explanation": "“Adayo” means far."
      }
    ]
  },
  {
    "id": "conversation-1",
    "unitId": "unit-conversation",
    "unitTitle": "Unit 9: Everyday Conversations",
    "lessonTitle": "Friendly Conversation",
    "description": "Combine greetings, names, feelings, and polite responses in short exchanges.",
    "orderIndex": 17,
    "xpReward": 15,
    "stage": "Conversation",
    "skillTags": [
      "Dialogue",
      "Review",
      "Speaking pattern"
    ],
    "questions": [
      {
        "id": "conversation-1-q1",
        "type": "multiple-choice",
        "prompt": "Best response to “Kumusta ka?”",
        "choices": [
          "Nasayaatak.",
          "Sangapulo.",
          "Puraw."
        ],
        "correctAnswer": "Nasayaatak.",
        "explanation": "“Nasayaatak” means “I am good/fine.”"
      },
      {
        "id": "conversation-1-q2",
        "type": "multiple-choice",
        "prompt": "Best response to “Ania ti naganmo?”",
        "choices": [
          "Ti naganko ket Ana.",
          "Nalabaga ti bado.",
          "Kannigid."
        ],
        "correctAnswer": "Ti naganko ket Ana.",
        "explanation": "A name question should be answered with your name."
      },
      {
        "id": "conversation-1-q3",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Ti naganko ket Justine.",
        "correctAnswer": "My name is Justine",
        "acceptedAnswers": [
          "my name is justine",
          "i am justine",
          "i'm justine"
        ],
        "explanation": "This follows the introduction pattern from Unit 2."
      },
      {
        "id": "conversation-1-q4",
        "type": "multiple-choice",
        "prompt": "Choose the phrase that means “Thank you.”",
        "choices": [
          "Agyamanak",
          "Mabisinak",
          "Sadino"
        ],
        "correctAnswer": "Agyamanak",
        "explanation": "“Agyamanak” means thank you."
      },
      {
        "id": "conversation-1-q5",
        "type": "multiple-choice",
        "prompt": "Choose the best response after someone says “Agyamanak.”",
        "choices": [
          "Awan ania man.",
          "Mabisinak.",
          "Naladaw."
        ],
        "correctAnswer": "Awan ania man.",
        "explanation": "“Awan ania man” works like “You’re welcome.”"
      },
      {
        "id": "conversation-1-q6",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kumusta ka, gayyem?",
        "correctAnswer": "How are you, friend?",
        "acceptedAnswers": [
          "how are you friend",
          "how are you, friend",
          "how are you my friend"
        ],
        "explanation": "“Gayyem” means friend."
      },
      {
        "id": "conversation-1-q7",
        "type": "multiple-choice",
        "prompt": "Which sentence means “I am happy”?",
        "choices": [
          "Naragsakak.",
          "Nabannogak.",
          "Nauhawak."
        ],
        "correctAnswer": "Naragsakak.",
        "explanation": "“Naragsakak” means “I am happy.”"
      },
      {
        "id": "conversation-1-q8",
        "type": "multiple-choice",
        "prompt": "Which sentence means “I am tired”?",
        "choices": [
          "Nabannogak.",
          "Nasayaatak.",
          "Adayo ti ospital."
        ],
        "correctAnswer": "Nabannogak.",
        "explanation": "“Nabannogak” means “I am tired.”"
      },
      {
        "id": "conversation-1-q9",
        "type": "multiple-choice",
        "prompt": "What should you say when leaving?",
        "choices": [
          "Mapanakun.",
          "Duyaw.",
          "Mano?"
        ],
        "correctAnswer": "Mapanakun.",
        "explanation": "“Mapanakun” means “I am leaving now.”"
      },
      {
        "id": "conversation-1-q10",
        "type": "multiple-choice",
        "prompt": "What should you say to mean “Take care”?",
        "choices": [
          "Agannad ka.",
          "Dua a libro.",
          "Nalabaga."
        ],
        "correctAnswer": "Agannad ka.",
        "explanation": "“Agannad ka” means “Take care.”"
      }
    ]
  },
  {
    "id": "conversation-2",
    "unitId": "unit-conversation",
    "unitTitle": "Unit 9: Everyday Conversations",
    "lessonTitle": "Classroom and Daily Phrases",
    "description": "Practice phrases that fit school, study, and everyday beginner conversations.",
    "orderIndex": 18,
    "xpReward": 15,
    "stage": "Conversation",
    "skillTags": [
      "Classroom",
      "Daily phrases",
      "Review"
    ],
    "questions": [
      {
        "id": "conversation-2-q1",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agadalak iti Ilokano.",
        "correctAnswer": "I study Ilokano",
        "acceptedAnswers": [
          "i study ilokano",
          "i am studying ilokano",
          "i'm studying ilokano"
        ],
        "explanation": "This is a useful phrase for your app and classroom setting."
      },
      {
        "id": "conversation-2-q2",
        "type": "multiple-choice",
        "prompt": "What does “libro” mean?",
        "choices": [
          "book",
          "water",
          "left"
        ],
        "correctAnswer": "book",
        "explanation": "“Libro” means book."
      },
      {
        "id": "conversation-2-q3",
        "type": "multiple-choice",
        "prompt": "What does “maestro” mean?",
        "choices": [
          "teacher",
          "student",
          "market"
        ],
        "correctAnswer": "teacher",
        "explanation": "“Maestro” can mean teacher."
      },
      {
        "id": "conversation-2-q4",
        "type": "multiple-choice",
        "prompt": "What does “estudiante” mean?",
        "choices": [
          "student",
          "father",
          "fish"
        ],
        "correctAnswer": "student",
        "explanation": "“Estudiante” means student."
      },
      {
        "id": "conversation-2-q5",
        "type": "multiple-choice",
        "prompt": "Choose the best meaning of “Kayatko ti agadal.”",
        "choices": [
          "I like to study",
          "I want water",
          "The school is far"
        ],
        "correctAnswer": "I like to study",
        "explanation": "“Kayatko” can mean “I like” or “I want.”"
      },
      {
        "id": "conversation-2-q6",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Sadino ti libro?",
        "correctAnswer": "Where is the book?",
        "acceptedAnswers": [
          "where is the book",
          "where is the book?"
        ],
        "explanation": "This combines the where-question pattern with classroom vocabulary."
      },
      {
        "id": "conversation-2-q7",
        "type": "multiple-choice",
        "prompt": "Best response if someone asks “Sadino ti eskuelaan?”",
        "choices": [
          "Adda iti kannawan.",
          "Mabisinak.",
          "Wen, nalabaga."
        ],
        "correctAnswer": "Adda iti kannawan.",
        "explanation": "A direction answer fits a where-question."
      },
      {
        "id": "conversation-2-q8",
        "type": "multiple-choice",
        "prompt": "Which sentence means “I am at school”?",
        "choices": [
          "Addaak iti eskuelaan.",
          "Mangan tayon.",
          "Awan ania man."
        ],
        "correctAnswer": "Addaak iti eskuelaan.",
        "explanation": "“Addaak iti...” means “I am at/in...”"
      },
      {
        "id": "conversation-2-q9",
        "type": "multiple-choice",
        "prompt": "Which phrase is polite in class?",
        "choices": [
          "Pakawanennak.",
          "Saan ti walo.",
          "Nangisit ti ikan."
        ],
        "correctAnswer": "Pakawanennak.",
        "explanation": "“Pakawanennak” can be used for excuse me or sorry."
      },
      {
        "id": "conversation-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Agyamanak, Maestro.",
        "correctAnswer": "Thank you, Teacher",
        "acceptedAnswers": [
          "thank you teacher",
          "thank you, teacher"
        ],
        "explanation": "This is a respectful classroom phrase."
      }
    ]
  },
  {
    "id": "review-1",
    "unitId": "unit-review",
    "unitTitle": "Unit 10: Checkpoint Review",
    "lessonTitle": "Foundations Checkpoint",
    "description": "Review greetings, introductions, family, numbers, and colors in one mixed lesson.",
    "orderIndex": 19,
    "xpReward": 20,
    "stage": "Review",
    "skillTags": [
      "Checkpoint",
      "Mixed practice",
      "Mastery"
    ],
    "questions": [
      {
        "id": "review-1-q1",
        "type": "multiple-choice",
        "prompt": "Which phrase means “Good morning”?",
        "choices": [
          "Naimbag a bigat",
          "Naimbag a rabii",
          "Agyamanak"
        ],
        "correctAnswer": "Naimbag a bigat",
        "explanation": "This reviews the first greeting lesson."
      },
      {
        "id": "review-1-q2",
        "type": "multiple-choice",
        "prompt": "Which word means “sibling”?",
        "choices": [
          "kabsat",
          "danum",
          "puraw"
        ],
        "correctAnswer": "kabsat",
        "explanation": "“Kabsat” means sibling, brother, or sister."
      },
      {
        "id": "review-1-q3",
        "type": "multiple-choice",
        "prompt": "What number is “sangapulo”?",
        "choices": [
          "10",
          "5",
          "2"
        ],
        "correctAnswer": "10",
        "explanation": "“Sangapulo” means ten."
      },
      {
        "id": "review-1-q4",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Mabisinak.",
        "correctAnswer": "I am hungry",
        "acceptedAnswers": [
          "i am hungry",
          "i'm hungry",
          "im hungry"
        ],
        "explanation": "This reviews the food and needs unit."
      },
      {
        "id": "review-1-q5",
        "type": "multiple-choice",
        "prompt": "What does “sadino” mean?",
        "choices": [
          "where",
          "red",
          "father"
        ],
        "correctAnswer": "where",
        "explanation": "“Sadino” means where."
      },
      {
        "id": "review-1-q6",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Ti naganko ket Ana.",
        "correctAnswer": "My name is Ana",
        "acceptedAnswers": [
          "my name is ana",
          "i am ana",
          "i'm ana"
        ],
        "explanation": "This reviews the name pattern."
      },
      {
        "id": "review-1-q7",
        "type": "multiple-choice",
        "prompt": "What does “nalabaga” mean?",
        "choices": [
          "red",
          "black",
          "white"
        ],
        "correctAnswer": "red",
        "explanation": "“Nalabaga” means red."
      },
      {
        "id": "review-1-q8",
        "type": "multiple-choice",
        "prompt": "What does “puraw” mean?",
        "choices": [
          "white",
          "green",
          "blue"
        ],
        "correctAnswer": "white",
        "explanation": "“Puraw” means white."
      },
      {
        "id": "review-1-q9",
        "type": "multiple-choice",
        "prompt": "Choose the phrase that means “Take care.”",
        "choices": [
          "Agannad ka",
          "Mano?",
          "Berde"
        ],
        "correctAnswer": "Agannad ka",
        "explanation": "“Agannad ka” means take care."
      },
      {
        "id": "review-1-q10",
        "type": "multiple-choice",
        "prompt": "Best response to “Agyamanak.”",
        "choices": [
          "Awan ania man.",
          "Naladaw.",
          "Dua."
        ],
        "correctAnswer": "Awan ania man.",
        "explanation": "“Awan ania man” works like “You’re welcome.”"
      }
    ]
  },
  {
    "id": "review-2",
    "unitId": "unit-review",
    "unitTitle": "Unit 10: Checkpoint Review",
    "lessonTitle": "Mixed Mastery Checkpoint",
    "description": "A final beginner checkpoint that requires full mastery before the course path is complete.",
    "orderIndex": 20,
    "xpReward": 25,
    "stage": "Review",
    "skillTags": [
      "Final review",
      "Spaced review",
      "Mastery"
    ],
    "questions": [
      {
        "id": "review-2-q1",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kumusta ka?",
        "correctAnswer": "How are you?",
        "acceptedAnswers": [
          "how are you",
          "how are you?"
        ],
        "explanation": "This reviews greetings and basic conversation."
      },
      {
        "id": "review-2-q2",
        "type": "multiple-choice",
        "prompt": "What does “siak” mean?",
        "choices": [
          "I / me",
          "you",
          "they"
        ],
        "correctAnswer": "I / me",
        "explanation": "This reviews pronouns."
      },
      {
        "id": "review-2-q3",
        "type": "multiple-choice",
        "prompt": "What does “isuna” mean?",
        "choices": [
          "he / she / it",
          "ten",
          "market"
        ],
        "correctAnswer": "he / she / it",
        "explanation": "This reviews the beginner gender note."
      },
      {
        "id": "review-2-q4",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kabsatko ni Juan.",
        "correctAnswer": "Juan is my sibling",
        "acceptedAnswers": [
          "juan is my sibling",
          "juan is my brother",
          "juan is my sister"
        ],
        "explanation": "This reviews family sentences."
      },
      {
        "id": "review-2-q5",
        "type": "multiple-choice",
        "prompt": "What number is “walo”?",
        "choices": [
          "8",
          "4",
          "6"
        ],
        "correctAnswer": "8",
        "explanation": "“Walo” means eight."
      },
      {
        "id": "review-2-q6",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Dakkel ti eskuelaan.",
        "correctAnswer": "The school is big",
        "acceptedAnswers": [
          "the school is big",
          "the school is large"
        ],
        "explanation": "This reviews descriptions."
      },
      {
        "id": "review-2-q7",
        "type": "multiple-choice",
        "prompt": "What does “inton bigat” mean?",
        "choices": [
          "tomorrow",
          "yesterday",
          "now"
        ],
        "correctAnswer": "tomorrow",
        "explanation": "This reviews time words."
      },
      {
        "id": "review-2-q8",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Kayatko ti danum.",
        "correctAnswer": "I want water",
        "acceptedAnswers": [
          "i want water",
          "i would like water"
        ],
        "explanation": "This reviews food and needs."
      },
      {
        "id": "review-2-q9",
        "type": "multiple-choice",
        "prompt": "What does “kannigid” mean?",
        "choices": [
          "left",
          "right",
          "near"
        ],
        "correctAnswer": "left",
        "explanation": "This reviews directions."
      },
      {
        "id": "review-2-q10",
        "type": "translation",
        "prompt": "Translate to English:",
        "ilokano": "Mapanakun. Agannad ka.",
        "correctAnswer": "I am leaving now. Take care.",
        "acceptedAnswers": [
          "i am leaving now take care",
          "i am leaving now. take care",
          "i'm leaving now take care",
          "i'm leaving now. take care"
        ],
        "explanation": "This reviews a natural leaving phrase and a caring goodbye."
      }
    ]
  }
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return sampleLessons.find((lesson) => lesson.id === lessonId);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return sampleLessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.orderIndex - b.orderIndex);
}

export function getPreviousLessons(lessonId: string): Lesson[] {
  const lesson = getLessonById(lessonId);
  if (!lesson) return [];

  return sampleLessons.filter((item) => item.orderIndex < lesson.orderIndex);
}
