import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
    titleChange,
    taskDelete,
    loadTasks,
    getTasks,
    getTaskLoadingStatus,
    taskCreate,
    taskComplete,
} from "./store/task";
import configureStore from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getError } from "./store/error";

const store = configureStore();
const App = () => {
    const task = useSelector(getTasks());
    const isLoading = useSelector(getTaskLoadingStatus());
    const error = useSelector(getError());
    console.log(task);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTasks());
    }, []);
    const changeTitle = (taskId) => {
        dispatch(titleChange(taskId));
    };
    const deleteTask = (taskId) => {
        dispatch(taskDelete(taskId));
    };
    const completedTask = (taskId) => {
        dispatch(taskComplete(taskId));
    };

    const createTask = () => {
        dispatch(
            taskCreate({
                title: "Supper new task Title",
                completed: false,
            })
        );
    };

    if (isLoading) {
        return <h1>Loading</h1>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h1>App</h1>

            <ul>
                {task.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`competed: ${el.completed}`}</p>
                        <button onClick={() => completedTask(el.id)}>
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
            <button onClick={createTask}>Create new Task</button>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
