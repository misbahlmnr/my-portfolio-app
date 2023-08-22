import styled from "styled-components";

type CirclePropType = {
  top: any;
  left: any;
};

export const AppLoadWrapper = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleWrapper = styled.div<CirclePropType>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: -1;
`;

export const MyButton = styled.a`
  width: 200px;
  padding: 10px 20px;
  background-color: #2c48d8;
  color: #fff;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  i {
    font-size: 20px;
  }
  @media screen and (max-width: 678px) {
    width: 150px;
    font-size: 14px;
  }
  &:hover {
    background-color: #223dc9;
    color: #fff;
  }
`;

export const AppWrapper = styled.div`
  position: relative;
  max-width: 100%;
  overflow-x: hidden;

  .circle-one {
    position: absolute;
    left: -1000px;
    top: -1007px;
    z-index: -1;
  }
  .circle-two {
    position: absolute;
    left: -100px;
    top: -1000px;
    z-index: -1;
  }
  .circle-tree {
    position: absolute;
    left: -1000px;
    top: 300px;
    z-index: -1;
  }
  .circle-for {
    position: absolute;
    left: -100px;
    top: 600px;
    z-index: -1;
  }
  .circle-five {
    position: absolute;
    left: -1000px;
    top: 1600px;
    z-index: -1;
  }
  .circle-six {
    position: absolute;
    left: -143px;
    top: 2518px;
    z-index: -1;
  }
  .circle-seven {
    position: absolute;
    left: -1000px;
    top: 2700px;
    z-index: -1;
  }
  .circle-eight,
  .circle-nine,
  .circle-teen,
  .circle-21,
  .circle-22,
  .circle-23 {
    display: none;
  }
  @media (max-width: 1024px) {
    .circle-one {
      position: absolute;
      left: -1000px;
      top: -1007px;
      z-index: -1;
    }
    .circle-two {
      position: absolute;
      left: -100px;
      top: -1000px;
      z-index: -1;
    }
    .circle-tree {
      position: absolute;
      left: -1000px;
      top: 300px;
      z-index: -1;
    }
    .circle-for {
      position: absolute;
      left: -100px;
      top: 600px;
      z-index: -1;
    }
    .circle-five {
      position: absolute;
      left: -1000px;
      top: 1600px;
      z-index: -1;
    }
    .circle-six {
      position: absolute;
      left: -143px;
      top: 2518px;
      z-index: -1;
    }
    .circle-seven {
      position: absolute;
      left: -1000px;
      top: 2977px;
      z-index: -1;
    }
    .circle-eight {
      display: block;
      position: absolute;
      left: -143px;
      top: 3518px;
      z-index: -1;
    }
    .circle-nine {
      display: block;
      position: absolute;
      left: -1000px;
      top: 4377px;
      z-index: -1;
    }
    .circle-teen {
      display: block;
      position: absolute;
      left: -143px;
      top: 4977px;
      z-index: -1;
    }
    .circle-21 {
      display: block;
      position: absolute;
      left: -1000px;
      top: 5000px;
      z-index: -1;
    }
    .circle-22 {
      display: block;
      position: absolute;
      left: -143px;
      top: 5877px;
      z-index: -1;
    }
    .circle-23 {
      display: block;
      position: absolute;
      left: -1000px;
      top: 6377px;
      z-index: -1;
    }
    .circle-24 {
      display: block;
      position: absolute;
      left: -143px;
      top: 6877px;
      z-index: -1;
    }
    .circle-25 {
      display: block;
      position: absolute;
      left: -1000px;
      top: 7377px;
      z-index: -1;
    }
  }

  @media (max-width: 678px) {
    .circle-one {
      position: absolute;
      left: -1500px;
      top: -1007px;
      z-index: -1;
    }
    .circle-two {
      position: absolute;
      left: -600px;
      top: -400px;
      z-index: -1;
    }
    .circle-tree {
      position: absolute;
      left: -1300px;
      top: 300px;
      z-index: -1;
    }
    .circle-for {
      position: absolute;
      left: -600px;
      top: 900px;
      z-index: -1;
    }
    .circle-five {
      position: absolute;
      left: -1300px;
      top: 1300px;
      z-index: -1;
    }
    .circle-six {
      position: absolute;
      left: -600px;
      top: 1700px;
      z-index: -1;
    }
    .circle-seven {
      position: absolute;
      left: -1300px;
      top: 2277px;
      z-index: -1;
    }
    .circle-eight {
      display: block;
      position: absolute;
      left: -600px;
      top: 2577px;
      z-index: -1;
    }
    .circle-nine {
      display: block;
      position: absolute;
      left: -1300px;
      top: 3000px;
      z-index: -1;
    }
    .circle-teen {
      display: block;
      position: absolute;
      left: -600px;
      top: 3400px;
      z-index: -1;
    }
    .circle-21 {
      display: block;
      position: absolute;
      left: -1000px;
      top: 5000px;
      z-index: -1;
    }
    .circle-22 {
      display: block;
      position: absolute;
      left: -143px;
      top: 5877px;
      z-index: -1;
    }
    .circle-23 {
      display: block;
      position: absolute;
      left: -1000px;
      top: 6377px;
      z-index: -1;
    }
    .circle-24 {
      display: block;
      position: absolute;
      left: -143px;
      top: 6877px;
      z-index: -1;
    }
    .circle-25 {
      display: block;
      position: absolute;
      left: -1000px;
      top: 7377px;
      z-index: -1;
    }
  }
`;
