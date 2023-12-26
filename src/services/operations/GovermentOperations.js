import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { govermentEndpoints } from "../apis";

const {
    POST_CREATE_GOV_API,
    GET_NON_REGISTERED_INSTITUTES_API,
    GET_REGISTERED_INSTITUTES_API,
    PUT_APPROVE_INSTITUTE_API
} = govermentEndpoints;

export const createGoverment = async (values) => {
    const toastId = toast.loading("Loading...");
    let result = null;
    try {
        const response = await apiConnector("POST", POST_CREATE_GOV_API,values);
        console.log("Goverment is registered.....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Goverment is not registered error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const getNonRegisteredInst = async (id) => {
    const toastId = toast.loading("Loading...");
    const url = `${GET_NON_REGISTERED_INSTITUTES_API}?id=${id}`;
    let result = [];
    try {
        const response = await apiConnector("GET", url);
        console.log("All the non registered institutes are .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot get all non registered institutes error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const getRegisteredInst = async (id) => {
    const toastId = toast.loading("Loading...");
    const url = `${GET_REGISTERED_INSTITUTES_API}?id=${id}`;
    let result = [];
    try {
        const response = await apiConnector("GET", url);
        console.log("All the registered institutes are .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot get all registered institutes error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const approveInst = async (id,instid) => {
    const toastId = toast.loading("Loading...");
    const url = `${PUT_APPROVE_INSTITUTE_API}?id=${id}&instid=${instid}`;
    let result = [];
    try {
        const response = await apiConnector("PUT", url);
        console.log("Approved institute .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    toast.dismiss(toastId);
    toast.success("Approved!!")
    } catch (error) {
        console.log("Cannot approve institutes error ......", error);
        result = error.response.data;
        toast.dismiss(toastId);
        toast.error("Approval Failed")
    }
    return result;
};



