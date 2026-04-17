import { io } from "socket.io-client";

let socket: any = null;

export const initsocket = async () => {
  if (!socket) {
    socket = io("http://localhost:8000", {
      transports: ["websocket"],
      reconnectionAttempts: Infinity, // ✅ correct
      timeout: 10000,
    });

    console.log("✅ NEW SOCKET CREATED");
  } else {
    console.log("♻️ REUSING SOCKET");
  }

  return socket;
};