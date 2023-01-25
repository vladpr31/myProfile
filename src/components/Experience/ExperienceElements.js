import styled from "styled-components";

export const Card = styled.div`
  @media screen and (hover: hover) {
    img {
      padding: 25px;
    }
    .card_image {
      align-self: center;
      height: 50%;
      max-width: 50%;
      padding: 25px;
    }
    .btn {
      color: #ffffff;
      padding: 0.8rem;
      font-size: 14px;
      text-transform: uppercase;
      border-radius: 4px;
      font-weight: 400;
      display: block;
      width: 100%;
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: transparent;
    }

    .btn:hover {
      background-color: rgba(255, 255, 255, 0.12);
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      margin-top: 25px;
      padding: 0;
    }

    .cards_item {
      display: flex;
      padding: 1rem;
    }

    @media screen and (max-width: 640px) {
      .cards_item {
        width: 50%;
      }
      .card_image {
        height: 100%;
        width: 100%;
        padding: 0;
      }
    }

    @media screen and (max-width: 768px) {
      .cards_item {
        width: 33.3333%;
      }
      .card_image {
        height: 100%;
        width: 100%;
        padding: 0;
      }
    }

    .card {
      background-color: white;
      border-radius: 0.25rem;
      box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
      display: flex;
      height: fit-content;
      flex-direction: column;
      overflow: hidden;
    }

    .card_content {
      padding: 1rem;
      background: radial-gradient(
        circle,
        rgba(13, 188, 244, 1) 0%,
        rgba(101, 220, 242, 0.8772759103641457) 72%,
        rgba(0, 212, 255, 1) 100%
      );
    }

    .card_title {
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: capitalize;
      margin: 5px;
      text-align: center;
    }

    .card_text {
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.75;
      margin-bottom: 1.25rem;
      font-weight: 400;
      text-align: center;
    }
  }
`;
