import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { Chat } from "@pushprotocol/uiweb";
import { useAccount } from "wagmi";

const client = createClient(
  getDefaultClient({
    appName: "Push Protocol Chat",
  })
);


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
      </Route>
    )
  );

  return (
    <main className="App">
      <RouterProvider router={router} />
    </main>
  );
}

function Root() {
   const { address } = useAccount();
  return (
    <main className="relative">
       <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Chat
          account={address}
          supportAddress="0xfC001B20Db6195b148cfc4F7685091931D93cD93"
          apiKey={'jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0'}
          env="staging"
        />
        <div className="App">
          <ConnectKitButton />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
