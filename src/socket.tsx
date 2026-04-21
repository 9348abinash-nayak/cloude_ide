import { io } from "socket.io-client";
import { Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initsocket = () => {
  socket = io("https://cloude-backend.onrender.com", {
    transports: ["websocket", "polling"],
    reconnectionAttempts: Infinity,
    timeout: 10000,
  });

  console.log("✅ NEW SOCKET CREATED");

  return socket;
};