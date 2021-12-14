import http from "../http-common";

class GamesDataService {
  getAll() {
    return http.get("/games");
  }

  get(id) {
    return http.get(`/games/${id}`);
  }

  create(data) {
    return http.post("/games", data);
  }

  update(id, data) {
    return http.put(`/games/${id}`, data);
  }

  delete(id) {
    return http.delete(`/games/${id}`);
  }

  deleteAll() {
    return http.delete(`/games`);
  }

  findByTitle(title) {
    return http.get(`/games?title=${title}`);
  }
}

export default new GamesDataService();