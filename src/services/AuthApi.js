import api from "./api";

export default class AuthApi {
  static login(body) {
    return api.post("/api/v1/auth/login", body);
  }
}
