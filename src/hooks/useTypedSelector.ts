import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootStateType } from "src/store/store";

export const useTypedSelector : TypedUseSelectorHook<rootStateType> = useSelector