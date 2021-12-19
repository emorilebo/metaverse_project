import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative">
      <h1>Login</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image src="/cregtlogo.jpeg" width={200} height={200} />

        <button>Login to the Metaverse</button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
