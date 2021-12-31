import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div className="flex space-x-4 p-3 rounded-lg">
      <p>{message.get("message")}</p>
    </div>
  );
}

export default Message;
