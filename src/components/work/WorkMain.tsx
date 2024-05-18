import styled from 'styled-components';
import ContentAuthor from '@/components/work/ContentAuthor';
import { ResponsiveContainer } from '@/components/shared/Styles';
import { User } from '@/hooks/user';

interface Props {
  youtubeUrl?: string;
  artworks: string[];
  authors: User[];
}
export default function WorkMain({ youtubeUrl, artworks, authors }: Props) {
  function formatYoutubeUrl(url: string) {
    if (url.includes('embed')) return url;

    let youtubeId;

    if (url.includes('youtube.com/watch?v=')) youtubeId = url.split('v=')[1];

    if (url.includes('youtu.be/')) youtubeId = url.split('youtu.be/')[1];

    if (!youtubeId) return url;

    if (youtubeId.includes('&')) youtubeId = youtubeId.split('&')[0];

    return `https://www.youtube.com/embed/${youtubeId}`;
  }

  return (
    <WorkMainLayout>
      <ContentContainer>
        {youtubeUrl && (
          <Iframe
            src={formatYoutubeUrl(youtubeUrl)}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder={0}
          ></Iframe>
        )}

        <ArtContainer>
          {artworks?.map((artwork) => (
            <ArtImage
              src={`${import.meta.env.VITE_API_URL}/file/${artwork}`}
              alt="art"
            />
          ))}
        </ArtContainer>
      </ContentContainer>
      <ContentAuthorSection>
        <ContentAuthorTop>
          <ContentAuthorTopLabel>참여 인원 </ContentAuthorTopLabel>
          <Line />
        </ContentAuthorTop>
        <ContentAuthorGroup>
          {authors?.map((author) => (
            <ContentAuthor
              key={author.uuid}
              name={author.name}
              email={author.email}
            />
          ))}
        </ContentAuthorGroup>
      </ContentAuthorSection>
    </WorkMainLayout>
  );
}

const ContentContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContentAuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const ContentAuthorTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const ContentAuthorTopLabel = styled.div`
  color: #878797;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  line-height: 150%; /* 21px */
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: var(--600, #ececf1);
`;

const ContentAuthorGroup = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: var(--New-group-Gutter, 16px);
  align-self: stretch;
  flex-wrap: wrap;
`;

const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  overflow: hidden;
  border-radius: 16px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  @media (max-width: 1440px) {
    border-radius: 12px;
  }
  @media (max-width: 744px) {
    border-radius: 8px;
  }
`;

const ArtImage = styled.img`
  align-self: stretch;
`;

const WorkMainLayout = styled(ResponsiveContainer)`
  display: flex;
  padding-top: 120px;
  padding-bottom: 120px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  @media (max-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 1440px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (max-width: 744px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
`;
