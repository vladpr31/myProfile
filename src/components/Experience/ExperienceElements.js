import styled from "styled-components";

export const Card = styled.div`
  @media (hover: hover) {
    .container {
      width: 600px;
      position: relative;
      display: flex;
      justify-content: space-between;
    }

    .container .card {
      position: relative;
      margin-left: 150px;
      margin-top: 50px;
    }
    .container .content p li {
      margin-bottom: 5px;
    }

    .container .card .face {
      width: 300px;
      height: 200px;
      transition: 0.5s;
    }

    .container .card .face.face1 {
      position: relative;
      display: flex;
      background: white;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translateY(100px);
    }

    .container .card .face.face1 .content {
      transition: 0.5s;
    }

    .container .card .face.face1 .content img {
      max-width: 100px;
      margin-left: 5px;
      opacity: 100%;
    }
    .container .card .face.face1 .content .skills {
      max-width: 100px;
      margin-left: 35px;
      opacity: 100%;
    }
    .container .card .face.face1 .content .personal {
      max-width: 100px;
      margin-left: 35px;
      opacity: 100%;
    }

    .container .card .face.face1 .content h3 {
      margin: 10px 0 0;
      padding: 0;
      color: black;
      text-align: center;
      font-size: 1.5em;
    }

    .container .card .face.face2 {
      position: relative;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      transform: translateY(-100px);
    }
    .container .card:hover .face.face2 {
      transform: translateY(0);
    }
    .container .card:hover .face.face1 {
      background: #25d366;
      transform: translateY(0);
    }
    .container .card:hover .face.face1 .content {
      opacity: 0.6;
    }

    .container .card .face.face2 .content p {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 200px;
      width: fit-content;
      position: relative;
      display: block;
      
    }
    .container .card .face.face1 .content .skills {
      width: 75px;
      height: 75px;
      margin-left: 25px;
      margin-top: 10px;
      opacity: 100%;
    }
    .container .card .face.face1 .content .education {
      width: 75px;
      height: 75px;
      margin-left: 20px;
      margin-top: 10px;
      opacity: 100%;
    }
    .container .card .face.face1 .content .personal {
      width: 75px;
      height: 75px;
      margin-left: 50px;
      margin-top: 10px;
      opacity: 100%;
    }
    .container .card .face.face1 {
      position: relative;
      display: flex;
      background: #25d366;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translateY(-100px);
    }
    .container .card .face.face1 .content h3 {
      margin: 10px 0 0;
      padding: 0;
      color: black;
      text-align: center;
      font-size: 1.5em;
    }
    .container .card .face.face2 .content p {
      margin: 0;
      padding: 0;
    }
    .container .card .face.face2 {
      position: relative;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      transform: translateY(-100px);
    }
    .container .card {
      position: relative;
      margin-top: 50px;
    }
    .container .content p li {
      margin-left: -75px;
    }
    .container .card:hover .face.face2 {
      transform: translateY(-100px);
    }
    .container .card:hover .face.face1 {
      background: #25d366;
      transform: translateY(-100px);
    }
    .container .card:hover .face.face1 .content {
      opacity: 1;
    }
  }
`;
