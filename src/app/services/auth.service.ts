import { Injectable } from '@angular/core';

import firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor(private afAuth: AngularFireAuth,
    private firestore: AngularFirestore) { }

    async signInWithGoogle(){
      const credentials = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      
      const userDoc = await this.firestore.collection("users").doc(credentials.user.uid).get().toPromise();
      if (userDoc.exists){
        this.user = {
          uid: credentials.user.uid,
          displayName: credentials.user.displayName,
          email: credentials.user.email,
          isEligible: userDoc.data()["isEligible"]
        };
      }

      else{
        this.user={
          uid:credentials.user.uid,
          displayName:credentials.user.displayName,
          email:credentials.user.email,
          isEligible:false
        };
      }

      localStorage.setItem("user", JSON.stringify(this.user));
      this.updateUserData();
    }
  
    private updateUserData(){
      this.firestore.collection("users").doc(this.user.uid).set({
        uid: this.user.uid,
        displayName: this.user.displayName,
        email: this.user.email,
        isEligible: this.user.isEligible
      }, {merge: true})
    }
  
    getUser(){
      if (this.user == null && this.userSignedIn()){
        var tempUser = JSON.parse(localStorage.getItem("user"))
        if ('isEligible' in tempUser){this.user = JSON.parse(localStorage.getItem("user"));}
      }
      return this.user;
    }

    printUser(){
      if (this.user == null && this.userSignedIn()){
        var tempUser = JSON.parse(localStorage.getItem("user"))
        if ('isEligible' in tempUser){this.user = JSON.parse(localStorage.getItem("user"));}
      }
      console.log(this.user);
    }
  
    userSignedIn(): boolean{

      return JSON.parse(localStorage.getItem("user")) != null;
    }

    signOut(){
      this.afAuth.signOut();
      localStorage.removeItem('user');
      this.user = null;
   }
}
