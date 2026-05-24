-- Learn Ilokano seed data
-- Run after schema.sql.

insert into public.units (slug, title, description, order_index)
values
  ('unit-greetings', 'Unit 1: Greetings', 'Start with common greetings, gratitude, and polite everyday words.', 1),
  ('unit-family', 'Unit 2: Family', 'Learn words for family members and simple family sentences.', 2),
  ('unit-food', 'Unit 3: Food & Daily Life', 'Practice useful words for eating, drinking, and daily conversation.', 3)
on conflict (slug) do nothing;

insert into public.lessons (unit_id, slug, title, description, xp_reward, order_index, is_published)
select id, 'greetings-1', 'Hello and Goodbye', 'Learn basic Ilokano greetings used in everyday conversations.', 10, 1, true
from public.units where slug = 'unit-greetings'
on conflict (slug) do nothing;

insert into public.lessons (unit_id, slug, title, description, xp_reward, order_index, is_published)
select id, 'greetings-2', 'How Are You?', 'Practice asking how someone is and answering politely.', 12, 2, true
from public.units where slug = 'unit-greetings'
on conflict (slug) do nothing;

with lesson as (
  select id from public.lessons where slug = 'greetings-1'
), inserted as (
  insert into public.exercises (lesson_id, exercise_type, prompt, correct_answer, explanation, order_index)
  select lesson.id, 'multiple-choice', 'What does “Naimbag a bigat” mean?', 'Good morning', '“Naimbag a bigat” means “Good morning.”', 1
  from lesson
  returning id
)
insert into public.exercise_choices (exercise_id, choice_text, is_correct, order_index)
select id, 'Good morning', true, 1 from inserted
union all select id, 'Good evening', false, 2 from inserted
union all select id, 'Thank you', false, 3 from inserted
union all select id, 'Goodbye', false, 4 from inserted;

with lesson as (
  select id from public.lessons where slug = 'greetings-1'
), inserted as (
  insert into public.exercises (lesson_id, exercise_type, prompt, correct_answer, explanation, order_index)
  select lesson.id, 'translation', 'Translate to English: “Agyamanak.”', 'Thank you', '“Agyamanak” is a polite way to say “Thank you.”', 2
  from lesson
  returning id
)
select id from inserted;
