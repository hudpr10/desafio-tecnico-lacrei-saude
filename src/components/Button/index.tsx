import StyledButton from "./style";

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  $style?: "ghost" | "primary";
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
  maxWidth?: string;
  ariaLabel?: string;
  ariaPressed?: boolean;
};

const Button = ({
  children,
  disabled = false,
  type = "button",
  handleClick,
  $style = "primary",
  ariaLabel,
  ariaPressed,
}: ButtonProps) => {
  return (
    <StyledButton
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      disabled={disabled}
      type={type}
      onClick={
        typeof handleClick === "function" ? () => handleClick() : () => {}
      }
      $style={$style}
      style={{ padding: typeof children === "object" ? "0 0" : "0 32px" }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
