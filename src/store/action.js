import * as actionTypes from "./actionTypes";

export function taskComplete(id) {
    return {
        type: actionTypes.taskUpdated,
        payload: { id, completed: true },
    };
}

export function titlechange(id) {
    return {
        type: actionTypes.taskUpdated,
        payload: { id, title: `New title for ${id}` },
    };
}

export function taskDelete(id) {
    return {
        type: actionTypes.taskDeleted,
        payload: { id },
    };
}
