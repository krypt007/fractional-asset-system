import { ConnectButton } from "thirdweb/react";
import Image from "next/image";
import { CHAIN, appMetadata, client, wallets } from "../utils/constants";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        Fractional&nbsp;
        <span
          className="!bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
          }}
        >
          Assets System
        </span>
      </h1>
      <div className="mx-auto">
        <Image
          src="/cats/1.png"
          width={400}
          height={320}
          alt="Cat Attack"
        />
      </div>
      <div className="max-w-xs">
        <ConnectButton
          client={client}
          appMetadata={appMetadata}
          wallets={wallets}
          chain={CHAIN}
          connectModal={{
            size: "compact",
          }}
          connectButton={{
            label: "Login",
          }}
        />
      </div>
      
    </div>
  );
};

export default Welcome;
