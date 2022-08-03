import { useReducer } from 'react'
import { reducer, initialState } from '../reducer/reducer';

const UseReducerExa = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>Hello {state.name}</h1>
            <input
                value={state.name}
                onChange={(e) => {
                    dispatch({ type: 'SET_NAME', payload: e.target.value });
                }}
            />
            <button
                onClick={() => {
                    dispatch({ type: 'CLEAR_NAME' });
                }}
            >
                clear
            </button>
        </>
    )
}

export default UseReducerExa