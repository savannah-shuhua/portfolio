import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexItem = styled.div`
  flex: 40%;
`;

export const FormGroup = styled.div`
  margin: 0 auto 1.25rem auto;
  padding: 0.25rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.125rem;
  }
`;

export const Input = styled.input`
  background-color: #f5eeea;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const Textarea = styled.textarea`
  background-color: #f5eeea;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const Button = styled.button`
  display: flex;
  align-utems: center;
  justify-content: center;
  --borderWidth: 4px;
  margin: 5px;
  background: #f5eeea;
  position: relative;
  border-radius: var(--borderWidth);

  &:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const LinkItem = styled.a`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;

  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;
