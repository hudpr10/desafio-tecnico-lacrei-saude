import StyledButton from "./style";

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  $style?: "ghost" | "primary";
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
  maxWidth?: string;
};

const Button = ({
  children,
  disabled = false,
  type = "button",
  handleClick,
  $style = "primary",
}: ButtonProps) => {
  return (
    <StyledButton
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
