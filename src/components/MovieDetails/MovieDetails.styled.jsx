import styled from '@emotion/styled';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Poster = styled.div`
  img {
    width: 300px;
    height: auto;
    margin-right: 20px;
  }
`;

export const Details = styled.div`
  text-align: left;
`;

export const CastContainer = styled.div`
  margin-top: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
`;

export const CastImage = styled.img`
  width: 200px;
  height: auto;
`;

export const Button = styled.button`
  margin-top: 20px;
`;
