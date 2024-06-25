import { AppDispatch, RootState } from "../store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();

// const logger = useSelector((state: RootState) => state.logger);
const logger = useTypedSelector((state) => state.logger);
