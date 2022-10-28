import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";

// Disparar ações
export const useAppDispatch: () => AppDispatch = useDispatch;
// buscar o valor do estado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
