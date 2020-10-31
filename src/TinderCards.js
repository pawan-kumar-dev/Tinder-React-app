import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import db from "./firebase";
const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("people").onSnapshot(snapshot => {
      setPeople(
        snapshot.docs.map(doc => {
          return {
            data: doc.data(),
            id: doc.id
          };
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map(({ data, id }) => {
          return (
            <TinderCard
              className="swipe"
              preventSwipe={["up", "down"]}
              key={id}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${data.url})` }}
              >
                <h3>{data.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCards;
