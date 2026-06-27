import { useState, useEffect } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, duration = 3000) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  };

  const ToastComponent = () => {
    if (!toast) return null;
    return (
      <div className="fixed bottom-4 right-4 px-4 py-3 bg-green-500 text-white rounded-lg shadow-lg animate-fade-in z-50 flex items-center gap-2">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        {toast}
      </div>
    );
  };

  return { showToast, ToastComponent };
};
