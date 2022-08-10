import axios from "axios";

import { DEFAULT_REQUESTS_TIMEOUT, BASE_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api`,
});

/**
 * @desc central api call
 */
class MakeAPICall {
    constructor(url, payload, headers, params, timeout) {
        axiosInstance.defaults.timeout =
            (timeout || DEFAULT_REQUESTS_TIMEOUT) * 1000; // support milliseconds
        this.url = url;
        this.payload = payload;
        this.headers = headers || { "content-type": "application/json" };
        this.params = params;
        this.axios = axiosInstance;
    }

    getConfig(otherConfigs) {
        const config = {
            headers: this.headers,
            params: this.params,
            ...otherConfigs,
        };
        return config;
    }

    async get(otherConfigs) {
        try {
            const config = this.getConfig(otherConfigs);
            const { data, status, headers } = await this.axios.get(
                this.url,
                config,
            );
            return {
                data,
                statusCode: status,
                headers,
            };
        } catch (error) {
            throw new Error(error);
        }
    }

    async put(otherConfigs) {
        try {
            const config = this.getConfig(otherConfigs);
            const { data, status, headers } = await this.axios.put(
                this.url,
                this.payload,
                config,
            );
            return {
                data,
                statusCode: status,
                headers,
            };
        } catch (error) {
            throw new Error(error);
        }
    }

    async post(otherConfigs) {
        try {
            const config = this.getConfig(otherConfigs);
            const { data, status, headers } = await this.axios.post(
                this.url,
                this.payload,
                config,
            );
            return {
                data,
                statusCode: status,
                headers,
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default MakeAPICall;
