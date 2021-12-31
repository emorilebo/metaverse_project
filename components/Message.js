import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`flex space-x-4 p-3 rounded-lg ${
        isUserMessage
          ? "rounded-br-none bg-pink-300"
          : "rouned-bl-none bg-blue-400"
      }`}
    >
      <p>{message.get("message")}</p>
    </div>
  );
}

export default Message;
