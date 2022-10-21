export function createStore(reducer, initialState) {
    let state = initialState;
    let listerners = [];

    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        for (let i = 0; i < listerners.length; i++) {
            const listerner = listerners[i];
            listerner();
        }
    }
    function subscribe(listerner) {
        listerners.push(listerner);
    }
    return { getState, dispatch, subscribe };
}
