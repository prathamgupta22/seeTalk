import { useSocket } from "@/context/socket.context.js";
import { useEffect } from "react";

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log(socket.id);
    });
  }, [socket]);

  return <h1>hello</h1>;
}
