import { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
};

export const Modal = ({
  open,
  title,
  children,
  footer,
  onClose,
}: ModalProps) => {
  if (!open) return null;

  const portalElement = document.getElementById("portal");

  if (!portalElement) {
    console.error("Portal element not found");
    return null;
  }

  const modalContent = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button className="modal__close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal__content">{children}</div>
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );

  return createPortal(modalContent, portalElement);
};
