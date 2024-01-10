import React from "react";
import "./App.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  
})


function App() {
  return (
    <>
      Hello World
    </>
  );
}

export default App;
