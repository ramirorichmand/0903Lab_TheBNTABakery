import { useState } from "react";
import Cake from "../components/Cake";

// sfc shortcut or ffc for a regular component
// type '<cake' hit tab and it will import
// option + shift + down arrow : duplicate
// autoformat: command A + command K + command F (vs code)
// type 'useState' once you see react in the drop down, hit tab + it imports
// change multiple words: highlight word -> Command d highlights next instance of word -> type whatever needs changing


const CakeContainer = () => {

    const [victoriaSponge, setVictoriaSponge] = useState(
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5
        }
    );

    const [teaLoaf, setTeaLoaf] = useState(
        {
            cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil",
                "dried fruit",
                "sugar",
                "self-raising flour",
                "strong tea",
            ],
            price: 2,
            rating: 3
        }
    );

    const [carrotCake, setCarrotCake] = useState(
        {
            cakeName: "Carrot Cake",
            ingredients: [
                "carrots",
                "walnuts",
                "oil",
                "cream cheese",
                "flour",
                "sugar",
            ],
            price: 8,
            rating: 5
        }
    );

    // EXTENSION - TRACKING REVENUE

    const [revenue, setRevenue] = useState(0);

    const updateRevenue = (saleValue) => {
        setRevenue(revenue + saleValue);
    }

    return(
        <>
            <div className="container">
                <Cake cake={victoriaSponge} onButtonClick={updateRevenue}/>
                <Cake cake={teaLoaf} onButtonClick={updateRevenue} />
                <Cake cake={carrotCake} onButtonClick={updateRevenue} />
            </div>
            <p id="price">Total sales: £{revenue}</p>
        </>
    )

}

export default CakeContainer;
