interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal = ({ isOpen, onClose, title, message }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-surface-primary rounded-2xl border border-border-primary shadow-xl p-8 max-w-sm mx-4 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary transition-colors"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30">
            <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-text-primary text-center mb-2">
          {title}
        </h3>

        <p className="text-sm text-text-secondary text-center mb-6 leading-relaxed">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full px-4 py-2.5 bg-gradient-to-r from-brand-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:from-brand-500 hover:to-purple-500 transition-all duration-200 active:scale-95"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
