import {LOCAL_URL, PORT} from "./apiConfig.js";


class Client {
    static baseURL = LOCAL_URL;

    // Login request
    static async login(payload) {
        const url = `${Client.baseURL}${PORT.AUTHORIZATION}/login`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            return await response.json();
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    // New workout request
    static async uploadWorkout(file) {
        const url = `${this.baseURL}${ENDPOINTS.UPLOAD_WORKOUT}`;
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) { throw new Error(`Error during  uploadWorkout: ${response.statusText}`);}
            return await response.json();
        } catch (error) {
            console.error('Error during uploadWorkout:', error);
            throw error;
        }
    }
}

const ApiCalls = {
    LOGIN: Client.login,
    UPLOAD_WORKOUT: Client.uploadWorkout,
};

export { ApiCalls };