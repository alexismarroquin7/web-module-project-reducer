export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEMORY_ADD = "MEMORY_ADD";
export const RECALL_MEMORY = "RECALL_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = operationSign => {
    return({ type:CHANGE_OPERATION, payload:operationSign });
};

export const clearDisplay = () => {
    return({ type:CLEAR_DISPLAY });
};

export const memoryAdd = () => {
    return({type:MEMORY_ADD});
};

export const recallMemory = () => {
    return({type: RECALL_MEMORY});
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
};