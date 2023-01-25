import styled from "styled-components";

export const Card = styled.div`
  @media {
    img {
      padding: 25px;
    }
    .card_image {
      align-self: center;
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

    .card {
      background-color: white;
      border-radius: 0.25rem;
      box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
      display: flex;
      height: 100%;
      flex-direction: column;
      overflow: hidden;
    }

    .card_content {
      padding: 15px;
      background-color: #353a3b;
      height: 100%;
    }

    .card_title {
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: capitalize;
      text-decoration: underline;
      margin: 5px;
      margin-bottom: 10px;
      text-align: center;
    }

    .card_text {
      color: #ffffff;
      font-size: 14.5px;
      line-height: 1.1;
      margin-bottom: 1.25rem;
      font-weight: 400;
      text-align: center;
    }
  }
  @media (min-width: 640px) {
    .cards_item {
      width: 50%;
    }
    .card_image {
      height: 100%;
      width: 100%;
      padding: 0;
    }
  }

  @media (min-width: 768px) {
    .cards_item {
      width: 33.3333%;
    }
    .card_image {
      height: 100%;
      width: 100%;
      padding: 0;
    }
  }
`;
