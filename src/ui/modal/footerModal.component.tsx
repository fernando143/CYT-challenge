import { Button } from "../button/button.component";
import "./modal.css";

type FooterModalProps = {
  disabled: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const FooterModal = ({
  disabled,
  onClose,
  onConfirm,
}: FooterModalProps) => {
  return (
    <div className="modal__footer">
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onConfirm} disabled={disabled}>
        Confirm
      </Button>
    </div>
  );
};
