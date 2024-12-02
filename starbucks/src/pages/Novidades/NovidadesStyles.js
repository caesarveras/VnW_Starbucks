import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  h1 {
    font-size: 2.5rem;
  }
  nav {
    a {
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
      font-size: 1.2rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const ArticleList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const ArticleCard = styled.div`
  background-color: #fff;
  border-radius: 150px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 15px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  margin: 15px 0;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

export const ArticleDescription = styled.p`
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #666;
  margin-bottom: 15px;
`;

export const ReadMoreButton = styled.button`
  background-color: #006241;
  font-family: 'Poppins', sans-serif;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d36;
  }
`;

