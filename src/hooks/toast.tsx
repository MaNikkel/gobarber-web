import React, { createContext, useContext, useCallback } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextState {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextState>({} as ToastContextState);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('a');
  }, []);
  const removeToast = useCallback(() => {
    console.log('a');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextState {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useAuth must be used within a ToastProvider');
  }

  return context;
}
