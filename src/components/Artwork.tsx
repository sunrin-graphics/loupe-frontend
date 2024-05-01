import styled from 'styled-components';

interface ArtworkProps {
  title: string;
  owner: string;
}

export default function Artwork({ title, owner }: ArtworkProps) {
  return (
    <Layout>
      <ArtImage src="thumbnail.png" />
      <ArtInfo>
        <ArtTitle>{title}</ArtTitle>
        <ArtOwner>{owner}</ArtOwner>
      </ArtInfo>
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 267px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const ArtTitle = styled.div`
  color: var(--100, #181826);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const ArtOwner = styled.div`
  color: var(--400, #878797);
  font-family: SUITE;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
`;

const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const ArtImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;
