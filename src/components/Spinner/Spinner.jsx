import { SpinnerOverlay, Spinner } from "./Spinner.styled";

export function Loader({ visible, ...rest }) {
  return (
    <SpinnerOverlay $visible={visible} {...rest}>
      <Spinner />
    </SpinnerOverlay>
  );
}
