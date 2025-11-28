"use client";
import Button from "../Button";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import MailIcon from "../Icons/MailIcon";
import StyledFooter from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a
            aria-label="Abrir perfil no LinkedIn"
            href="https://www.linkedin.com/in/hudson-proque-reis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button $style="ghost">
              <LinkedInIcon />
            </Button>
          </a>
        </li>
        <li>
          <a
            aria-label="Abrir repositórios no GitHub"
            href="https://github.com/hudpr10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button $style="ghost">
              <GithubIcon />
            </Button>
          </a>
        </li>
        <li>
          <a
            aria-label="Enviar email para Hudson"
            href="mailto:hudsonpr09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button $style="ghost">
              <MailIcon />
            </Button>
          </a>
        </li>
      </ul>
      <p>Desenvolvido por Hudson - 2025</p>
    </StyledFooter>
  );
};

export default Footer;
