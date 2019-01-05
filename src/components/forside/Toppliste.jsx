import React from "react";
import { Item } from "semantic-ui-react";

const Toppliste = ({ restaurants, title }) => {
  let listElement = "";

  if (restaurants.length > 0) {
    listElement = (
      <Item.Group>
        {" "}
        {restaurants.map(r => {
          const lastVisited = new Date(r.lastVisited).toLocaleDateString();
          return (
            <Item key={r.name}>
              <Item.Content>
                <Item.Header>{r.name}</Item.Header>
                <Item.Meta>
                  Score: {r.score}, Besøkt: {lastVisited}
                </Item.Meta>
                <Item.Description>
                  {r.comment ? r.comment : "Ingen kommentar lagt inn."}
                </Item.Description>
              </Item.Content>
            </Item>
          );
        })}
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
