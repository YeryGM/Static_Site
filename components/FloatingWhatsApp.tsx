import Icon from "./Icons";
import { WHATSAPP_LINK } from "./data";

export default function FloatingWhatsApp() {
  return (
    <div className="tw-wheel-container">
      <a className="tw-wheel-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp Transfribol">
        <span className="tw-wheel-spinning" aria-hidden="true">
          <span className="tire-ring" />
        </span>
        <span className="tw-wheel-fixed-hub">
          <Icon name="whatsapp" className="tw-wheel-icon" />
        </span>
      </a>
    </div>
  );
}
