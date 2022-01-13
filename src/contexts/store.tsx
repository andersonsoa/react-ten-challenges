import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

interface Store {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Store = createContext({} as Store);

export const StoreProvider: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Store.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </Store.Provider>
  );
};

export const useStore = () => useContext(Store);
