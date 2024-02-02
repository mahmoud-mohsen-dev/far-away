import { ArrOFNotesOrEmptyArr, InitialItemsObj } from "./Types";

function Stats({ notes }: { notes: ArrOFNotesOrEmptyArr }) {
    if (!notes.length) {
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list</em>
            </footer>
        );
    }

    const packedNums = notes.filter(
        (note: InitialItemsObj) => note.packed
    ).length;
    const percent = Math.round((packedNums * 100) / notes.length);
    return (
        <footer className="stats">
            {percent === 100 ? (
                <em>You got everything! Ready to go ✈️</em>
            ) : (
                <em>
                    💼 You have {notes.length} items on your list, and you
                    already packed {packedNums} ({percent}%)
                </em>
            )}
        </footer>
    );
}
export default Stats;
