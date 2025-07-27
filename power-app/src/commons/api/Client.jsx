import {BASE_URL, ENDPOINTS} from "./apiConfig.js";


class Client {
    static baseURL = BASE_URL;

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

export default Client;