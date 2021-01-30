import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ASingleNews } from '../a-single-news';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firestore : AngularFirestore) { }

  getNews(){
    return this.firestore
    .collection("news", ref => ref.orderBy('date', 'desc'))
    .valueChanges();
  }

  addNews(user:User,description:string,date:any,slug:string){
    this.firestore.collection("news").add({writerUid: user.uid,
      writerDisplayName: user.displayName,
      writerEmail: user.email,
      writerEligibility: user.isEligible,
      description: description,
      date: date,
      slug: slug});
  }
}
