export function thunk({ getSate, dispatch }) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            if (typeof action === "function") {
                action(dispatch, getSate);
            } else {
                return next(action);
            }
        };
    };
}
