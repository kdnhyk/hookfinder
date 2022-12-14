import styled from "styled-components";

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  .HeaderInner {
    width: calc(100vw - 180px);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 12px;
    .Logo {
      h1 {
        width: 309px;
        height: 52px;

        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 54px;
        line-height: 52px;

        color: #ffffff;
        -webkit-text-stroke: 1px #000;
        /* text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25); */
        cursor: pointer;
      }
    }
    .Menu {
      display: flex;
      gap: 36px;
      h2 {
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 30px;
        line-height: 30px;

        color: #000000;
        cursor: pointer;
        &:hover {
          color: #33b0ff;
        }
      }
    }
  }
`;

export default function Header() {
  console.log("Header");

  return (
    <HeaderBlock>
      <div className="HeaderInner">
        <div className="Logo">
          <h1>Hook finder</h1>
        </div>
        <div className="Menu">
          <h2>API</h2>
          <h2>Materials</h2>
          <h2>Components</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </HeaderBlock>
  );
}
