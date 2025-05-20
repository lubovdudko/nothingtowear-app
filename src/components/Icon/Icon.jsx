import styled from "styled-components";

const StyledIcon = styled.img`
  background-color: transparent;
  max-width: 40px;
  max-height: 40px;
`;

function Icon(props) {
  return <StyledIcon {...props} />;
}

export default Icon;
