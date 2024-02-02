import { useState } from "react";
import { v4 as uuid } from "uuid";
import { InitialItemsObj } from "./Types";

function Form({
    onAddNote,
}: {
    onAddNote: (eventObj: InitialItemsObj) => void;
}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("1");

    const optionsValue = [];
    for (let i = 0; i < 20; i++) {
        optionsValue[i] = <option value={i + 1}>{i + 1}</option>;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const eventObj: InitialItemsObj = {
            id: uuid(),
            description: description,
            quantity: quantity,
            packed: false,
        };

        onAddNote(eventObj);
        setDescription("");
        setQuantity("1");
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            >
                {optionsValue}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>add</button>
        </form>
    );
}

export default Form;
