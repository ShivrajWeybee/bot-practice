import { ADD_CHAT_FLOW, SET_INPUT_VALUE, EDIT_CHAT_MESSAGE, EDIT_CHAT_TARGET_ID } from "../actionTypes"

interface initialState {
    chatFlow: object;
    inputValue: string;
}
const initialState = {
    chatFlow: [],
    inputValue: "",
}

interface action {
    type: string,
    payload: any,
    chatCompoId: number,
    editableProperty: string
}

const chatFlowReducer = (state = initialState, action:action) => {
    switch (action.type) {
        case ADD_CHAT_FLOW:
            return {
                ...state,
                chatFlow: [...state.chatFlow, action.payload]
            }

        case EDIT_CHAT_MESSAGE:
            return {
                ...state,
                chatFlow: state.chatFlow.map((chat:any) => chat._id === action.payload.chatCompoId ? { ...chat, [action.payload.editableProperty]: action.payload.message } : chat)
            }
        
        // case EDIT_CHAT_TARGET_ID:
        //     return {
        //         ...state,
        //         chatFlow: state.chatFlow.map((chat:any) => chat._id === action.chatCompoId ? {...chat, [action.editableProperty]: action.payload} : chat)
        //     }

        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload,
            }

        default:
            return state
    }
}

export default chatFlowReducer
