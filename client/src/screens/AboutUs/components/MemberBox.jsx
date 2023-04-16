import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.small};
  text-align: center;

  img {
    height: 8rem;
    width: 8rem;
    border-radius: 100px;
    border: 5px solid ${({ theme }) => theme.colors.yellow};
  }
`;

const MemberBox = ({ image, name, position }) => {
  return (
    <Wrapper>
      <img src={image} alt="person" />
      <h4>{name}</h4>
      <p>{position}</p>
    </Wrapper>
  );
};

MemberBox.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default MemberBox;
