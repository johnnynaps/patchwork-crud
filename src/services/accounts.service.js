import http from "../http-common";

class AccountsDataService {
  getAll() {
    return http.get("/accounts");
  }

  get(id) {
    return http.get(`/accounts/${id}`);
  }

  create(data) {
    return http.post("/accounts", data);
  }

  update(id, data) {
    return http.put(`/accounts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/accounts/${id}`);
  }

  deleteAll() {
    return http.delete(`/accounts`);
  }

  findByUsername(username) {
    return http.get(`/accounts?title=${username}`);
  }
}

export default new AccountsDataService();