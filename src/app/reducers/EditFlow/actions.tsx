import {
    FETCH_CHAT_COMPONENT_FAILURE,
    FETCH_CHAT_COMPONENT_SUCCESS,
    FETCH_CHAT_COMPONENT_REQUEST,
    ADD_CHAT_FLOW,
    SET_INPUT_VALUE,
    EDIT_CHAT_MESSAGE
} from "../actionTypes";
import { GetChatComponents } from "./services";

const fetchChatComponentRequest = () => {
    return {
        type: FETCH_CHAT_COMPONENT_REQUEST,
    }
}
const fetchChatComponentSuccess = (data: object) => {
    return {
        type: FETCH_CHAT_COMPONENT_SUCCESS,
        payload: data,
    }
}
const fetchChatComponentFailure = (err: any) => {
    return {
        type: FETCH_CHAT_COMPONENT_FAILURE,
        payload: err,
    }
}

export const fetchChatComponent = () => {
    return (dispatch: any) => {
        dispatch(fetchChatComponentRequest());
        return GetChatComponents().then(
            (result: any) => {
                console.log(result);
                dispatch(fetchChatComponentSuccess(result));
            },
            (error: any) => {
                dispatch(fetchChatComponentFailure(error));
            }
        );
    }
};

export const addToChatFlow = (chat: object) => {
    return {
        type: ADD_CHAT_FLOW,
        payload: chat,
    }
}

export const editChatMessage = (chatCompoId: number, message: any, editableProperty: string) => {
    return {
        type: EDIT_CHAT_MESSAGE,
        payload: {
            message,
            chatCompoId,
            editableProperty
        }
    }
}

export const setTheInputValue = (input_value: string) => {
    return {
        type: SET_INPUT_VALUE,
        payload: input_value,
    }
}
