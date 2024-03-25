import axios, { AxiosRequestConfig } from "axios";
import AuthService from "./AuthService";

const ROOT_API = "http://127.0.0.1:9000/"; 

const makeRequest = async (
    method: string,
    resource: string,
    params: Record<string, any> | undefined = undefined,
    data: Record<string, any> | undefined = undefined,
    headers: Record<string, string> | undefined = undefined
) => {
    let request: AxiosRequestConfig = {
        method: method,
        url: ROOT_API + resource
    };

    if (params) request = { ...request, params: params };
    if (data) request = { ...request, data: data };
    if (headers) request = { ...request, headers: headers };

    try {
        const response = await axios(request);
        
        return response.data;  // Return just the data
    } catch (error: any) {
        if (error.response.status == 403) {
            AuthService.logout();
        }
        console.log(error);
        throw error;
    }
};

const makeAuthenticatedRequest = async (
    method: string,
    resource: string,
    params: Record<string, any> | undefined = undefined,
    data: Record<string, any> | undefined = undefined
) => {
    const authToken = await AuthService.getToken()

    if (!authToken) {
        AuthService.logout();
        throw new Error("Authentication token is missing.");
    }

    return makeRequest(method, resource, params, data, {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
    });
};

const ApiService = {
    // Regular requests without authentication
    get: (resource: string, params?: any, data?: any) => makeRequest("get", resource, params, data),
    post: (resource: string, params?: any, data?: any) => makeRequest("post", resource, params, data),
    put: (resource: string, params?: any, data?: any) => makeRequest("put", resource, params, data),
    delete: (resource: string, params?: any, data?: any) => makeRequest("delete", resource, params, data),

    // Authenticated requests with JWT token
    authGet: (resource: string, params?: any, data?: any) => makeAuthenticatedRequest("get", resource, params, data),
    authPost: (resource: string, params?: any, data?: any) => makeAuthenticatedRequest("post", resource, params, data),
    authPut: (resource: string, params?: any, data?: any) => makeAuthenticatedRequest("put", resource, params, data),
    authDelete: (resource: string, params?: any, data?: any) => makeAuthenticatedRequest("delete", resource, params, data),
};

export default ApiService;
