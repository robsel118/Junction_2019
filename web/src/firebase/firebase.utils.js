import firebase from "firebase/app";
import "firebase/firestore";
import axios from "axios";
import { Items, STORES } from "../data/dummy";
const _ = require("lodash");

const config = {
  apiKey: "AIzaSyAs2Vsdk2pJnXDAEIB_SFF6HMFLqcm3ldQ",
  authDomain: "junction-a588b.firebaseapp.com",
  databaseURL: "https://junction-a588b.firebaseio.com",
  projectId: "junction-a588b",
  storageBucket: "junction-a588b.appspot.com",
  messagingSenderId: "584444003769",
  appId: "1:584444003769:web:99ed9066c2933b6430e268"
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const generateNewBasket = () => {
  const newDocument = firestore.collection("baskets").doc();
  const randomNumberOfItem = _.random(1, 8);
  const randomItems = _.sampleSize(Items, randomNumberOfItem);
  const randomUser = _.sample(["GbaVM57M1hSGNUruaBoD", "AYD1wNUgj31szhrVr1At"]);
  const randomStore = _.sample(STORES);
  const total = randomItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
  newDocument.set({
    karma: _.random(-10, 10),
    timestamp: Date.now(),
    items: randomItems,
    user: randomUser,
    store: randomStore,
    price: parseFloat(total.toFixed(2))
  });
};

var generatorOn = false;
export const convertBasketSnapshotToArray = snapshot => {
  const basketData = [];
  snapshot.forEach(function(doc) {
    const { karma, items, price, store, user, timestamp } = doc.data();
    basketData.push({
      id: doc.id,
      karma,
      items,
      price,
      store,
      user,
      timestamp
    });
  });
  if (!generatorOn && !_.isEmpty(basketData)) {
    voteGenerator(basketData);
    generatorOn = true;
  }
  return basketData;
};

export const getTopBasket = (snapshot, tab) => {
  const baskets = convertBasketSnapshotToArray(snapshot);
  const sorted =
    tab === 1
      ? baskets.sort((a, b) => a.karma < b.karma)
      : baskets.sort((a, b) => a.karma > b.karma);

  return _.take(sorted, 10);
};

export const voteGenerator = baskets => {
  const highest = _.take(_.orderBy(baskets, "karma", "desc"), 10);
  const lowest = _.take(_.orderBy(baskets, "karma", "asc"), 10);
  const top = _.union(highest, lowest);

  setInterval(function() {
    console.log("voting");
    generateLikeOrDislike(highest);
  }, 2000);
};

export const generateLikeOrDislike = baskets => {
  const random = _.random(0, baskets.length - 1);
  const basket = baskets[random];
  const randomLike = _.random(-10, 10);
  console.log(
    `${basket.id} with old socre ${basket.karma} now changed by ${randomLike}`
  );
  firestore
    .collection("baskets")
    .doc(basket.id)
    .set({ ...basket, karma: basket.karma + randomLike });
};

export default firebase;
