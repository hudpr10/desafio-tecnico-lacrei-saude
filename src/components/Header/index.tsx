"use client";

import { theme } from "@/styles/theme";
import HelpIcon from "../Icons/HelpIcon";
import StyledHeader from "./style";
import DarkIcon from "../Icons/DarkIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeTheme } from "@/store/slices/themeSlice";
import LightIcon from "../Icons/LightIcon";
import Button from "../Button";
import Link from "next/link";

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
      <Link href={"/"}>
        <h1>Lacrei Saúde</h1>
      </Link>

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
          <Button $style="ghost">
            <HelpIcon color={theme.colors.emerald40} />
          </Button>
        </Link>
        <Button handleClick={() => dispatch(changeTheme())}>
          {choseIcon()}
        </Button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
