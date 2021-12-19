import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            objectFit="cover"
            className="rounded-full"
            src="/cregtlogo.jpeg"
            layout="fill"
          />
        </div>
        <div>
          <div>
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Message */}
          {/* Username */}
          {/* Change username component */}
        </div>
      </div>
    </div>
  );
}

export default Header;
