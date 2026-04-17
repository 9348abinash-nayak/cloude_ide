import { io } from "socket.io-client";

let socket: any = null;

export const initsocket = async () => {
  if (!socket) {
const socket = io("https://cloude-backend.onrender.com", {
  transports: ["websocket", "polling"], // ✅ important
  reconnectionAttempts: Infinity,
  timeout: 10000,
});

    console.log("✅ NEW SOCKET CREATED");
  } else {
    console.log("♻️ REUSING SOCKET");
  }

  return socket;
};