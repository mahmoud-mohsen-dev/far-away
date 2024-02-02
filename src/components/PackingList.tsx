import { ArrOFNotesOrEmptyArr, InitialItemsObj, SortBy } from "./Types";
import Item from "./Item";

function PackingList({
    notes,
    onRemoveNote,
    onHandlePacked,
    onSortBy,
    onHandleClear,
}: {
    notes: ArrOFNotesOrEmptyArr;
    onRemoveNote: (id: string) => void;
    onHandlePacked: (id: string) => void;
    onSortBy: (id: string) => void;
    onHandleClear: () => void;
}) {
    return (
        <div className="list">
            <ul>
                {notes.map((item: InitialItemsObj) => (
                    <Item
                        item={item}
                        onRemoveNote={onRemoveNote}
                        onHandlePacked={onHandlePacked}
                    />
                ))}
            </ul>
            <div className="actions">
                <select onChange={(e) => onSortBy(SortBy[e.target.value])}>
                    <option value="quantity">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by Packed status</option>
                </select>
                <button onClick={onHandleClear}>CLEAR LIST</button>
            </div>
        </div>
    );
}

export default PackingList;
