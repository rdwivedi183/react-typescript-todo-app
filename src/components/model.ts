import { useReducer } from "react";

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean
}

// type Action = 
//     | {type: 'add', payload: string}
//     | {type: 'remove', payload: number}
//     |  {type: 'done', payload: 'string'}

// const TodoReducer = (state: Todo[], action: Action) => {

// }


// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer, []);

//     return(
//         <div />
//     )
// }