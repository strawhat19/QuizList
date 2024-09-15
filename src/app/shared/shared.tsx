'use client';

import Logo from '../components/logo/logo';
import { Atlanta } from './database/database';
import { db, dbNames } from '@/server/firebase';
import { States } from './library/common/dictionaries';
import { createContext, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { Question } from '../components/question/questioncard';

export const SharedDatabase = createContext({});

export default function SharedData({ children }: { children: React.ReactNode; }) {
  let [user, setUser] = useState(null);
  let [beta, setBeta] = useState(false);
  let [cards, setCards] = useState<any>([]);
  let [darkMode, setDarkMode] = useState(true);
  let [menuOpen, setMenuOpen] = useState(false);
  let [pageTitle, setPageTitle] = useState(<Logo />);
  let [location, setLocation] = useState<any>(Atlanta);
  let [isSidebarOpen, setSidebarOpen] = useState(true);
  let [questions, setQuestions] = useState<Question[]>([]);
  let [questionToEdit, setQuestionToEdit] = useState<Question>({});
  let [geoDataState, setGeoDataState] = useState<any>(States.Ready);
  let [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  let [time, setTime] = useState(`Sunday, September 1st, 5:33:06 am`);

  useEffect(() => {
    const questionsFirestoreDatabase = collection(db, dbNames.questions);
    const realTimeListenerForQuestionsDB = onSnapshot(questionsFirestoreDatabase, (currentDataInDB) => {
      const questionsFromDB: any = [];
      currentDataInDB.forEach((doc) => questionsFromDB.push(doc.data()));
      setQuestions(questionsFromDB);
    })

    return () => {
      realTimeListenerForQuestionsDB();
    }
  }, [])

  return <>
    <SharedDatabase.Provider value={{
      user, setUser, 
      time, setTime,
      beta, setBeta,
      cards, setCards,
      menuOpen, setMenuOpen,
      location, setLocation,
      darkMode, setDarkMode, 
      pageTitle, setPageTitle, 
      questions, setQuestions,
      geoDataState, setGeoDataState,
      isSidebarOpen, setSidebarOpen, 
      questionToEdit, setQuestionToEdit,
      isMobileSidebarOpen, setMobileSidebarOpen, 
    }}>
      {children}
    </SharedDatabase.Provider>
  </>
}