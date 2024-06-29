import { useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import BoardList from "./components/BoardList/BoardList";

function App() {
    const [activeBoardId, setActiveBoardId] = useState("board-0");

    return (
        <div className={appContainer}>
            <div className={board}></div>
            <BoardList
                activeBoardId={activeBoardId}
                setActiveBoardId={setActiveBoardId}
            />
            <div>
                <button className={buttons}>이 게시판 삭제하기</button>
                <button className={buttons}>활동 목록 보이기</button>
            </div>
        </div>
    );
}

export default App;
