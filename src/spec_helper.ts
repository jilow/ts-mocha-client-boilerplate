// @ts-ignore
import * as mockserver from 'mockserver'
import * as http from 'http'
import { join } from 'path'
const PORT = process.env.PORT || 9001
http.createServer(mockserver(join(__dirname, '../mocks'))).listen(PORT)

export const MOCK_URL = `http://127.0.0.1:${PORT}`
