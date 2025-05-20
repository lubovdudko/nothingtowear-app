import { BaseButton, NavButton } from "./Button.styled";

export function StyledButton({ to, variant, children, ...rest }) {
  if (to) {
    return (
      <NavButton to={to} $variant={variant} {...rest}>
        {children}
      </NavButton>
    );
  }
  return (
    <BaseButton $variant={variant} {...rest}>
      {children}
    </BaseButton>
  );
}
