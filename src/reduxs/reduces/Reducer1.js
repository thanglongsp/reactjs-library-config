export const Reducer1 = (state = {age: 23}, action) => {
    switch (action.type) {
        case "TEST":
            state = {
                ...state,
                name: "thanglongsp",
            };
            break;
    }
    return state;
};
