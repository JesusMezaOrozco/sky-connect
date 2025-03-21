import { type InternalAxiosRequestConfig } from "axios";

export function AddAccessKeyParamToRequest(config: InternalAxiosRequestConfig) {
  const accessKey = process.env.AVIATION_STACK_API_KEY;
  if (accessKey != null) {
    config.params["access_key"] = accessKey;
  }
  return config;
}
