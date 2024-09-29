import axios from "axios";
import { InputUser, IResponse, LoginedUser } from "./types";

const Axios = axios.create({
  baseURL: "http://localhost:4002",
  withCredentials: true,
});

export const handleSignup = async (user: InputUser): Promise<IResponse> => {
  const response = await Axios.post("/signup", user);
  return response.data;
};

export const handleLogin = async (user: LoginedUser): Promise<IResponse> => {
  const response = await Axios.post("login", user);
  return response.data;
};

export const handleVerify = async (): Promise<IResponse> => {
  const response = await Axios.get("/verify");
  return response.data;
};

export const handlePictureUpload = async (data: FormData): Promise<IResponse> => {
  const response = await Axios.patch("/profile/upload", data);
  return response.data;
};

export const handleCoverPhoto = async (data: FormData): Promise<IResponse> => {
  const response = await Axios.patch("/profile/cover", data);
  return response.data;
};