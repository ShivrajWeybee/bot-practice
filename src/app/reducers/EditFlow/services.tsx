import axios from "axios";

export const GetChatComponents = async () => {
    try {
        const res = await axios
            .get("https://localhost:44329/api/BOTComponent/GetAllComponentTypes");
        return res.data.data.records;
    } catch (err: any) {
        return err.message;
    }
}

export const GetChatFlow = async (id: any) => {
    try {
        const res = await axios
            .get(`https://localhost:44329/BOTConfiguration/getFlow/3`);
        return res.data
    }
    catch (err: any) {
        return err.message;
    }
}
