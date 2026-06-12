-- Small sample seed. Expand this after contributors approve content.

insert into curriculum_stages (title, description, order_index)
values
  ('Foundation', 'Starter phrases, introductions, and basic pronouns.', 1),
  ('People', 'Family and people-centered vocabulary.', 2),
  ('Daily Life', 'Numbers, time, food, and everyday needs.', 3),
  ('Description', 'Colors and simple adjective practice.', 4),
  ('Navigation', 'Places, direction words, and where questions.', 5),
  ('Conversation', 'Mini-dialogues that combine earlier skills.', 6),
  ('Review', 'Checkpoint lessons and spaced review.', 7);

insert into units (title, description, focus, order_index)
values
  ('Unit 1: Starter Phrases', 'Begin with useful phrases, respectful greetings, and confidence-building practice.', array['Greetings','Politeness','Daily classroom phrases'], 1),
  ('Unit 2: Myself', 'Introduce your name, talk about yourself, and notice how Ilokano handles pronouns.', array['Introductions','Pronouns','No grammatical gender'], 2),
  ('Unit 3: Family', 'Learn family words and simple sentences about people close to you.', array['Family','People','Possession'], 3),
  ('Unit 4: Counting', 'Practice numbers for age, quantity, prices, and everyday counting.', array['Numbers','Age','Quantity'], 4),
  ('Unit 5: Colors & Descriptions', 'Describe objects with colors and simple adjectives.', array['Colors','Adjectives','Description'], 5),
  ('Unit 6: Time & Days', 'Talk about morning, evening, today, yesterday, and tomorrow.', array['Time','Days','Routine'], 6),
  ('Unit 7: Food & Needs', 'Use common food words and basic phrases for eating, drinking, and hunger.', array['Food','Needs','Polite requests'], 7),
  ('Unit 8: Places & Directions', 'Ask where places are and understand simple direction words.', array['Places','Directions','Where questions'], 8),
  ('Unit 9: Everyday Conversations', 'Combine earlier skills into short, useful exchanges.', array['Questions','Answers','Mini-dialogues'], 9),
  ('Unit 10: Checkpoint Review', 'Review greetings, family, numbers, colors, time, food, and directions together.', array['Spaced review','Mixed practice','Confidence check'], 10);
