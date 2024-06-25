// sub reducers => combine

import { boardsReudcer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer = {
    logger: loggerReducer,
    boards: boardsReudcer,
    modal: modalReducer,
};

export default reducer;
