
import { Question } from '@/app/components/question/questioncard';
import { Difficulties, MathTopics, Subjects } from '../../library/common/dictionaries';

export const SampleQuestions = [
  new Question({
    answer: 4,
    choices: [3, 5, 4, 22],
    question: `What is 2 + 2?`,
    subject: Subjects.Math.name,
    difficulty: Difficulties.Easy,
    explanation: `2 + 2 = 4 Because I Said So`,
    topics: [MathTopics.Algebra, MathTopics.Arithmetic],
  }),
  new Question({
    answer: 5,
    choices: [3, 5, 4, 22],
    question: `What is 3 + 2?`,
    subject: Subjects.Math.name,
    difficulty: Difficulties.Medium,
    explanation: `3 + 2 = 5 Because I Said So`,
    topics: [MathTopics.Algebra, MathTopics.Arithmetic],
  }),
  new Question({
    answer: 22,
    choices: [3, 5, 4, 22],
    question: `What is 11 + 11?`,
    subject: Subjects.Math.name,
    difficulty: Difficulties.Hard,
    explanation: `11 + 11 = 22 Because I Said So`,
    topics: [MathTopics.Algebra, MathTopics.Arithmetic],
  }),
  new Question({
    answer: 100,
    choices: [100, 5, 4, 22],
    question: `What is 10 x 10?`,
    subject: Subjects.Math.name,
    difficulty: Difficulties.Extreme,
    explanation: `10 x 10 = 100 Because I Said So`,
    topics: [MathTopics.Algebra, MathTopics.Arithmetic],
  }),
]