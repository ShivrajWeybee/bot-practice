import { ADD_CHAT_FLOW, SET_INPUT_VALUE, EDIT_CHAT_MESSAGE, EDIT_CHAT_TARGET_ID, FETCH_CHAT_FLOW_REQUEST, FETCH_CHAT_FLOW_SUCCESS, FETCH_CHAT_FLOW_FAILURE } from "../../../../../../../The Projects/ChatBot/theChatBot/src/app/reducers/actionTypes"

interface initialState {
    loading: boolean,
    chatFlow: object,
    inputValue: string,
    chatFlowFromAPI: object,
    errorMessage: string,
}
const initialState = {
    loading: false,
    chatFlow: [],
    inputValue: "",
    chatFlowFromAPI: [],
    errorMessage: "",
}

interface action {
    type: string,
    payload: any,
    chatCompoId: number,
    editableProperty: string
}

const chatFlowReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case ADD_CHAT_FLOW:
            return {
                ...state,
                chatFlow: [...state.chatFlow, action.payload]
            }

        case EDIT_CHAT_MESSAGE:
            return {
                ...state,
                chatFlow: state.chatFlow.map((chat: any) => chat._id === action.payload.chatCompoId ? { ...chat, [action.payload.editableProperty]: action.payload.message } : chat)
            }

        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload,
            }

        case FETCH_CHAT_FLOW_REQUEST:
            return {
                loading: true,
            }

        case FETCH_CHAT_FLOW_SUCCESS:
            return {
                ...state,
                loading: false,
                chatFlowFromAPI: action.payload,
                chatFlow: action.payload,
            }

        case FETCH_CHAT_FLOW_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            }

        default:
            return state
    }
}

export default chatFlowReducer
