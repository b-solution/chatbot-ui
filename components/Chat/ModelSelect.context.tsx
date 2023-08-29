// import React, { createContext, useContext } from 'react';
// import { useCreateReducer } from '@/hooks/useCreateReducer';
// import { ModelSelectInitialState, initialState } from './ModelSelect.state';

// const ReducerContext = createContext<ModelSelectInitialState | undefined>(undefined);

// export const useReducerContext = () => {
//   const contextValue = useContext(ReducerContext);
//   if (!contextValue) {
//     throw new Error('useReducerContext must be used within a ReducerContextProvider');
//   }
//   return contextValue;
// };

// export const ReducerContextProvider: React.FC = ({ children }: any) => {
//   const contextValue = useCreateReducer<ModelSelectInitialState>({ initialState });
//   debugger
//   return (
//     <ReducerContext.Provider value={contextValue}>
//       {children}
//     </ReducerContext.Provider>
//   );
// };


import { createContext, useContext } from 'react';

const ModelNameContext = createContext('');

export function useModelNameContext() {
  return useContext(ModelNameContext);
}

export default ModelNameContext;
