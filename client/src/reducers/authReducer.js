export default function(state = {}, action) {
    console.log(action)
    console.log(action.payload)
    switch (action.type) {
        default:
            return state
    }
}