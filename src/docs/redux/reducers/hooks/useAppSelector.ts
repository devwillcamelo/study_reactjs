import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './reducer/store';

export cons useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// usado para pegar informações do Reducer no Redux