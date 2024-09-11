import { app } from './app'
import { PORT } from '@config/env-variables'

app.listen(PORT, () => {
  console.log({ status: 'conectado', port: PORT, db: null, url: `http://localhost:${PORT}` })
})