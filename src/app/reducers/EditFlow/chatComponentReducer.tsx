import {
    FETCH_CHAT_COMPONENT_REQUEST,
    FETCH_CHAT_COMPONENT_SUCCESS,
    FETCH_CHAT_COMPONENT_FAILURE,
} from "../../../../../../../The Projects/ChatBot/theChatBot/src/app/reducers/actionTypes";

interface initialState {
    loading: boolean;
    chatButtons: object;
    errorMessage: string;
}
const initialState = {
    loading: false,
    chatButtons: [],
    errorMessage: "",
}
interface action {
    type: string,
    payload: any
}

const ChatComponentReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case FETCH_CHAT_COMPONENT_REQUEST:
            return {
                loading: true,
            }

        case FETCH_CHAT_COMPONENT_SUCCESS:
            return {
                ...state,
                loading: false,
                chatButtons: action.payload,
            }

        case FETCH_CHAT_COMPONENT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            }

        default:
            return state
    }
}

export default ChatComponentReducer
