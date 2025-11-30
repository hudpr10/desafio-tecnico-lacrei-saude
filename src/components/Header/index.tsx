"use client";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import StyledHeader from "./style";
import HelpIcon from "../Icons/HelpIcon";
import LightIcon from "../Icons/LightIcon";
import DarkIcon from "../Icons/DarkIcon";
import Button from "../Button";

import { theme } from "@/styles/theme";
import { RootState } from "@/store";
import { changeTheme } from "@/store/slices/themeSlice";

const Header = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  // A função ajuda a definir icone
  function choseIcon() {
    if (darkMode) {
      return <LightIcon color={"#fff"} />;
    } else {
      return <DarkIcon color={"#fff"} />;
    }
  }

  return (
    <StyledHeader>
      <h1>
        <Link href={"/"}>Lacrei Saúde</Link>
      </h1>

      {/* Essa nav é para ser exibida em telas maiores */}
      <nav className="nav-text">
        <Link href={"/help"}>
          <Button $style="ghost">Ajuda</Button>
        </Link>
        <Button handleClick={() => dispatch(changeTheme())}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </Button>
      </nav>

      {/* Essa nav é para ser exibida em telas menores */}
      <nav className="nav-icon">
        <Link href={"/help"}>
          <Button $style="ghost" ariaLabel="Página de Ajuda">
            <HelpIcon color={theme.colors.emerald40} />
          </Button>
        </Link>
        <Button
          handleClick={() => dispatch(changeTheme())}
          ariaLabel={darkMode ? "Modo Claro" : "Modo Escuro"}
          aria-pressed={darkMode}
        >
          {choseIcon()}
        </Button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
