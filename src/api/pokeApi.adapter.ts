import axios from "axios";

export class PokeApiAdapter {
    private readonly axios = axios;
    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url);
        return data;
    }

}