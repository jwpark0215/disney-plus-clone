import styled from "styled-components";
import ImgSlider from "./ImgSlider.js";
import Viewers from "./Viewers"
import Recommends from "./Recommends.js";
import NewDisney from "./NewDisney.js";
import Originals from "./Originals.js";
import Trending from "./Trending.js";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider/>
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh- 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
