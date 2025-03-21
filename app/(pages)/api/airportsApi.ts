import axios from "axios";
import { AddAccessKeyParamToRequest } from "./interceptors";

export const airportsApi = axios.create({
  baseURL: `${process.env.AVIATION_STACK_BASE_URL}/airports`,
});

airportsApi.interceptors.request.use(AddAccessKeyParamToRequest);
