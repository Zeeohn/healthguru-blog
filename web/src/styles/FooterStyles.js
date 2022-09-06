import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 3rem 0 2rem 0;
  text-align: center;
  background-color: var(--black-2);
  .footerImage {
    width: 8%;
    background-color: white;
  }
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--white-1);
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 25px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 768px) {
    .footerImage {
      width: 20%;
    }
  }
`;
