import { createContext } from 'react';

type PropTypes = {
  logId: number;
  setLogId?: React.Dispatch<React.SetStateAction<number>>;
};

const Context = createContext<PropTypes>({ logId: 0 });

export default Context;
