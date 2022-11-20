import type { FC } from "react";
import { meta } from "@/shared/meta";

const Footer: FC = () => {
  const year = new Date().getFullYear();
  const title = meta.title;

  return (
    <footer className="footer">
      <p>
        ©{year}, {title}
      </p>
    </footer>
  );
};

export default Footer;
