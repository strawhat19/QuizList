'use client';

import { db } from '@/server/firebase';
import Logo from '../components/logo/logo';
import { Atlanta } from './database/database';
import { States } from './library/common/dictionaries';
import { createContext, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { Question } from '../components/question/questioncard';
import { SampleQuestions } from './database/questions/questions';

export const SharedDatabase = createContext({});

export default function SharedData({ children }: { children: React.ReactNode; }) {
  let [user, setUser] = useState(null);
  let [beta, setBeta] = useState(false);
  let [cards, setCards] = useState<any>([]);
  let [darkMode, setDarkMode] = useState(true);
  let [menuOpen, setMenuOpen] = useState(false);
  let [features, setFeatures] = useState<any>([]);
  let [pageTitle, setPageTitle] = useState(<Logo />);
  let [location, setLocation] = useState<any>(Atlanta);
  let [isSidebarOpen, setSidebarOpen] = useState(true);
  let [geoDataState, setGeoDataState] = useState<any>(States.Ready);
  let [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  let [time, setTime] = useState(`Sunday, September 1st, 5:33:06 am`);
  let [questions, setQuestions] = useState<Question[]>(SampleQuestions);

  useEffect(() => {
    const featuresCollection = collection(db, `features`);
    const unsubscribeFromFeaturesDatabase = onSnapshot(featuresCollection, (currentFeaturesInDB) => {
      const featuresFromDB: any[] = [];
      currentFeaturesInDB.forEach((doc) => featuresFromDB.push(doc.data()));
      setFeatures(featuresFromDB);
      setBeta(featuresFromDB[0].enabled);
    });

    const cardsCollection = collection(db, `cards`);
    const unsubscribeFromCardsDatabase = onSnapshot(cardsCollection, (currentCardsInDB) => {
      const cardsFromDB: any[] = [];
      currentCardsInDB.forEach((doc) => cardsFromDB.push(doc.data()));
      setCards(cardsFromDB);
    });

    return () => {
      unsubscribeFromCardsDatabase();
      unsubscribeFromFeaturesDatabase();
    };
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
      isMobileSidebarOpen, setMobileSidebarOpen, 
    }}>
      {children}
    </SharedDatabase.Provider>
  </>
}