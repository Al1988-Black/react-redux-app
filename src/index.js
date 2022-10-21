import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { createStore } from "./store/createStore";
// import { taskReducer } from "./store/taskReduser";
import * as actions from "./store/action";
import { initiateStore } from "./store/store";
//import { compose, pipe } from "lodash/fp";

// const initialState = [
//     { id: 1, title: "Task 1", completed: false },
//     { id: 2, title: "Task 2", completed: false },
// ];
const store = initiateStore();
const App = () => {
    const [state, setState] = useState(store.getState());
    useEffect(
        () =>
            store.subscribe(() => {
                setState(store.getState());
            }),
        []
    );
    const completeTask = (taskId) => {
        store.dispatch(actions.taskComplete(taskId));
    };
    const changeTitle = (taskId) => {
        store.dispatch(actions.titlechange(taskId));
    };
    const deleteTask = (taskId) => {
        store.dispatch(actions.taskDelete(taskId));
    };

    return (
        <>
            <h1>App</h1>

            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`competed: ${el.completed}`}</p>
                        <button onClick={() => completeTask(el.id)}>
                            Completed
                        </button>
                        <button onClick={() => changeTitle(el.id)}>
                            ChangeTitle
                        </button>
                        <button onClick={() => deleteTask(el.id)}>
                            DeleteTask
                        </button>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// const x = 2;
// let y = 6;
// const double = (number) => number * 2;
// const square = (number) => number * number;
// const half = (number) => number / y;
// console.log(half(12));//не чистые функции
// y = 2;
// console.log(half(12));
// // const mathCalculate = compose(half, square, double);

// const divide = (num2) => {
//     return function (num1) {
//         return num1 / num2;
//     };
// };
// const mathCalculate = pipe(double, square, half, divide(3));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
