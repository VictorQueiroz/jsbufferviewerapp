import { createContext } from "react";
import Client from "./Client";

const ClientContext = createContext<Client | null>(null);

export default ClientContext;
