import Button from "../Button";

type FormButtonProps = {
  disabled: boolean;
};

const FormButton = ({ disabled }: FormButtonProps) => {
  return (
    <Button disabled={disabled} type="submit">
      Enviar
    </Button>
  );
};

export default FormButton;
