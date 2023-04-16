import { Container } from "@mui/material";
import { Spacer } from "../../../components/Spacer";
import styled from "styled-components";
import MemberBox from "./MemberBox";
import member1 from "../../../assets/members/member1.jpg";
import member2 from "../../../assets/members/member2.jpg";
import member3 from "../../../assets/members/member3.jpg";
import member4 from "../../../assets/members/member4.jpg";
import SlideUp from "../../../components/SlideUp";

const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const ContentWrapper = styled.div`
  .membersWrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 750px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }
  .comment {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MeetOurTeam = () => {
  return (
    <Wrapper>
      <Spacer size="s" />
      <Container>
        <SlideUp viewOffset={100}>
          <ContentWrapper>
            <div className="comment">
              <h2>Meet our team</h2>
              <p>Our heroes</p>
            </div>
            <div className="membersWrap">
              <MemberBox
                image={member1}
                name="Lars Peeters"
                position="Founder"
              />
              <MemberBox
                image={member2}
                name="Estelle Darcy"
                position="Director of Operations"
              />
              <MemberBox
                image={member3}
                name="Soo Jin Ae"
                position="Shelter Worker"
              />
              <MemberBox
                image={member4}
                name="Howard Ong"
                position="Shelter Worker"
              />
            </div>
          </ContentWrapper>
        </SlideUp>
      </Container>
      <Spacer size="s" />
    </Wrapper>
  );
};

export default MeetOurTeam;
