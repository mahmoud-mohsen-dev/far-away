import { InitialItemsObj } from "./Types";

function Item({
    item,
    onRemoveNote,
    onHandlePacked,
}: {
    item: InitialItemsObj;
    onRemoveNote: (id: string) => void;
    onHandlePacked: (id: string) => void;
}) {
    return (
        <li>
            <label
                style={item.packed ? { textDecoration: "line-through" } : {}}
            >
                <input
                    type="checkbox"
                    id={item.id}
                    checked={item.packed}
                    onClick={() => onHandlePacked(item.id)}
                />
                {item.quantity} {item.description}
            </label>
            <button onClick={() => onRemoveNote(item.id)}>❌</button>
        </li>
    );
}

export default Item;
