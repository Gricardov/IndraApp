export async function publicFetch(url, method, jsonBody, params) {
    const result = {};

    try {
        const paramsTemp = {
            method,
            ...params,
            headers: {
                'Content-Type': 'application/json',
                ...params?.headers,
            },
            body: jsonBody ? JSON.stringify(jsonBody) : null
        }
        const response = await fetch(url, paramsTemp);
        if (response.ok) {
            const data = await response.json();
            result.data = data;
            return result;
        } else {
            throw new Error('Error del servidor');
        }
    } catch (error) {
        console.log(error);
        result.error = error;
        return result;
    }
}