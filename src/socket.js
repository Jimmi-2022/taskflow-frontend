import { io } from 'socket.io-client'

// Замените URL на ваш сервер с WebSocket
const SOCKET_SERVER_URL = 'http://localhost:4000'

const socket = io(SOCKET_SERVER_URL, {
	transports: ['websocket'],
})

export default socket
