import { EmptyStateWrapper } from "./EmptyState.styled";

function EmptyState({ children, ...rest }) {
  return <EmptyStateWrapper {...rest}>{children}</EmptyStateWrapper>;
}

export default EmptyState;
