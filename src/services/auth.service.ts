import Axios, { AxiosResponse } from 'axios';
import { Config } from '../config/config';

export interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

export interface RegisteredUserData {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginUserData {
  username: string;
  password: string;
}

export interface LoggedInUserData {
  id: string;
  token: string;
}

export interface ErrorResponse {
  status: string;
}

export class AuthService {
  private static url = Config.serverUrl;

  public static registerUser = async (
    data: RegisterUserData,
  ): Promise<RegisteredUserData> => {
    try {
      const res: AxiosResponse<RegisteredUserData> = await Axios.post(
        AuthService.url + '/register',
        data,
      );
      return res.data;
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.status
      ) {
        throw error.response.data.status;
      }
      throw error;
    }
  };

  public static login = async (
    data: LoginUserData,
  ): Promise<LoggedInUserData> => {
    try {
      const res: AxiosResponse<LoggedInUserData> = await Axios.post(
        AuthService.url + '/authenticate',
        data,
      );
      return res.data;
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.status
      ) {
        throw error.response.data.status;
      }
      throw error;
    }
  };
}
