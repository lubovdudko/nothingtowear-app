import styled from "styled-components";

export const DescriptiveText = styled.p`
  font-size: 0.8rem;
  font-family: "Lato", sans-serif;
`;

export const TextHighlight = styled.span`
  font-weight: 700;
`;

export const Title = styled.h1`
  color: #444444;
  text-align: center;
`;

export const RegularText = styled.p`
  font-size: 16px;
  font-family: "Playfair Display", serif;
  margin: 5px;
`;

export const HomeHeading = styled(Title)`
  font-size: 5rem;
  font-weight: 100;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const HomeDescriptiveText = styled(DescriptiveText)`
  margin: 1.5rem 3rem;
  line-height: 1.6;
  font-weight: 300;
  font-size: 1.5rem;
`;
