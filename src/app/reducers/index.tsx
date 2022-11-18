import { combineReducers } from "redux";
import ChatComponentReducer from "./EditFlow/chatComponentReducer";
import chatFlowReducer from "./EditFlow/chatFlowReducer";

const rootReducer = combineReducers({
    ChatComponentReducer: ChatComponentReducer,
    chatFlowReducer: chatFlowReducer,
})

export default rootReducer
