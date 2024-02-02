import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import {
    ArrOFNotesOrEmptyArr,
    InitialItemsObj,
    SortBy,
} from "./components/Types";

function App() {
    const [notes, setNotes] = useState<ArrOFNotesOrEmptyArr>([]);
    // console.log(notes);

    function addNote(eventObj: InitialItemsObj) {
        setNotes((prevNote: ArrOFNotesOrEmptyArr) => [...prevNote, eventObj]);
    }

    function removeNote(id: string) {
        setNotes((prevNotes: ArrOFNotesOrEmptyArr) => {
            return prevNotes.filter((note: InitialItemsObj) => note.id !== id);
        });
    }

    function handlePacked(id: string) {
        // console.log(id);
        setNotes((prevNotes: ArrOFNotesOrEmptyArr) => {
            return prevNotes.map((note: InitialItemsObj) => {
                return note.id == id ? { ...note, packed: !note.packed } : note;
            });
        });
        // console.log(notes);
    }

    function handleClear() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setNotes([]);
    }

    function handleSortBy(e: SortBy) {
        const sortedArr = [...notes].sort(
            (a: InitialItemsObj, b: InitialItemsObj) => {
                if (e === "packed") {
                    if (a[e] === true) {
                        return 1;
                    }
                    return -1;
                } else if (e === SortBy.description) {
                    return a[e].localeCompare(b[e]);
                } else {
                    return Number(a[e]) - Number(b[e]);
                }
            }
        );
        setNotes(sortedArr);
        // console.log(sortedArr);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddNote={addNote} />
            <PackingList
                notes={notes}
                onRemoveNote={removeNote}
                onHandlePacked={handlePacked}
                onSortBy={handleSortBy}
                onHandleClear={handleClear}
            />
            <Stats notes={notes} />
        </div>
    );
}

export default App;
