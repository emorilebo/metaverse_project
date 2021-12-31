import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div>
      <p>{message.get("message")}</p>
    </div>
  );
}

export default Message;
