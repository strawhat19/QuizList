import { initializeApp } from 'firebase/app';
import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { Question } from '@/app/components/question/questioncard';

const firebaseConfig = {
    appId: process.env.NEXT_PUBLIC_APPID,
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    projectId: process.env.NEXT_PUBLIC_PROJECTID || `quizlist-1c29f`,
};

export const dbNames = {
    questions: `questions`,
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addQuestionToDatabase = async (question: Question) => {
    let questionToStoreInDatabase = JSON.parse(JSON.stringify(question));
    await setDoc(doc(db, dbNames.questions, questionToStoreInDatabase.id), questionToStoreInDatabase);
}

export const deleteQuestionsFromDatabase = async (idOfQuestionToDelete: string) => {
    await deleteDoc(doc(db, dbNames.questions, idOfQuestionToDelete));
}

export default app;