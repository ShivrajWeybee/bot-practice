import axios from "axios";
import {
    fetchChatComponentRequest,
    fetchChatComponentSuccess,
    fetchChatComponentFailure
} from "./actions";

export const GetChatComponents = () => {
    return (dispatch:any) => {
        dispatch(fetchChatComponentRequest());
        axios
            .get("https://localhost:44317/api/Component")
            .then((res:any) => dispatch(fetchChatComponentSuccess(res.data)))
            .catch((err:any) => dispatch(fetchChatComponentFailure(err.message)))
    }
}
