import { connectOnDb } from "@config/db";
import { app } from "./app";
import { PORT } from "@config/env-variables";

app.listen(PORT, () => {
  connectOnDb()
    .then(({ ok }) => {
      console.log({
        status: "conectado",
        port: PORT,
        db: ok ? "ask" : null,
        url: `http://localhost:${PORT}`,
      });
  });
});
