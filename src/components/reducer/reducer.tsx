export interface HelloState {
    name: string;
}

export type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'CLEAR_NAME' };

export const initialState: HelloState = {
    name: 'kamal',
};

export function reducer(state: HelloState, action: Action): HelloState {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'CLEAR_NAME':
            return { ...state, name: '' };
        default:
            return state;
    }
}
