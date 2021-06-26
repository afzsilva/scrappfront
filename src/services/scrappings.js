import { http } from "./config";

export default {
  listar: () => {
    return http.get("all_citacoes");
  },
};
