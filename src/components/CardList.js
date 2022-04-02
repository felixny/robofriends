import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {
    return (
        <>
            {robots.map((_user, index) => {
                return (
                    <Card
                        key={index}
                        id={robots[index].id}
                        name={robots[index].name}
                        email={robots[index].email}
                    />
                );
            })}
        </>
    )
};

export default CardList;