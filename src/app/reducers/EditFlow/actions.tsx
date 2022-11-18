import {
    FETCH_CHAT_COMPONENT_FAILURE,
    FETCH_CHAT_COMPONENT_SUCCESS,
    FETCH_CHAT_COMPONENT_REQUEST,
    ADD_CHAT_FLOW,
    SET_INPUT_VALUE,
    EDIT_CHAT_MESSAGE
} from "../actionTypes";

export const fetchChatComponentRequest = () => {
    return {
        type: FETCH_CHAT_COMPONENT_REQUEST,
    }
}

export const fetchChatComponentSuccess = (data:object) => {
    return {
        type: FETCH_CHAT_COMPONENT_SUCCESS,
        payload: data,
    }
}

export const fetchChatComponentFailure = (err:any) => {
    return {
        type: FETCH_CHAT_COMPONENT_FAILURE,
        payload: err,
    }
}

export const addToChatFlow = (chat:object) => {
    return {
        type: ADD_CHAT_FLOW,
        payload: chat,
    }
}

export const editChatMessage = (chatCompoId: number, message: any, editableProperty: string) => {
    console.log({ chatCompoId });
    console.log({ message });
    console.log({ editableProperty });
    return {
        type: EDIT_CHAT_MESSAGE,
        payload: {message,
        chatCompoId,
        editableProperty}
    }
}

export const setTheInputValue = (input_value:string) => {
    return {
        type: SET_INPUT_VALUE,
        payload: input_value,
    }
}
