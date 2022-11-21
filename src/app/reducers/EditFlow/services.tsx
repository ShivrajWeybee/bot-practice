import axios from "axios";

export const GetChatComponents = async () => {
    try {
        const res = await axios
            .get("https://localhost:44329/api/BOTComponent/GetAllComponentTypes");
        return res.data.data;
    } catch (err: any) {
        return err.message;
    }
}
