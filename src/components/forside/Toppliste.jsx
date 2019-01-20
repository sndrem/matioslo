import React from "react";
import { Item, Rating } from "semantic-ui-react";
import "./toppliste.scss";

const Toppliste = ({ restaurants, title, loading }) => {
  let listElement = "";
  if (restaurants.length > 0 || loading) {
    listElement = (
      <Item.Group>
        {" "}
        {restaurants.map(r => {
          const lastVisited = new Date(r.lastVisited).toLocaleDateString();
          return (
            <Item key={r.name}>
              <Item.Content>
                <Item.Header>{r.name}</Item.Header>
                <Item.Meta>{r.category}</Item.Meta>
                <Item.Meta>Besøkt: {lastVisited}</Item.Meta>
                <Rating
                  icon="heart"
                  defaultRating={r.score}
                  maxRating={6}
                  disabled
                />
                <Item.Description>
                  {r.comment ? r.comment : "Ingen kommentar lagt inn."}
                </Item.Description>
                <Item.Extra>
                  {r.homepage ? (
                    <a
                      href={r.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.homepage}
                    </a>
                  ) : (
                    "Ingen nettside lagt til."
                  )}
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
        <p>
          <a href="#/restauranter">Se alle restauranter</a>
        </p>
      </Item.Group>
    );
  } else {
    listElement = (
      <p>
        Det er ingen restauranter i databasen foreløpig. Logg inn og legg til en
        restaurant!
      </p>
    );
  }
  return (
    <div>
      <h1>{title}</h1>
      {listElement}
    </div>
  );
};

export default Toppliste;
