import { User } from '@/hooks/user';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
  authors: User[];
}
export default function WorkTop({
  title,
  description,
  thumbnail,
  authors,
}: Props) {
  return (
    <WorkTopLayout>
      <ThumbnailContainer>
        <Thumbnail
          src={`${import.meta.env.VITE_API_URL}/file/${thumbnail}`}
          alt="thumbnail"
        />
      </ThumbnailContainer>
      <ContentHeadSection>
        <ContentHeadContainer>
          <ContentHeadTop>
            <ContentTitle>{title}</ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </ContentHeadTop>
          <Authors>
            {authors?.map((author) => (
              <Author key={author.uuid}>
                <AuthorProfile
                  src={
                    author.avatar
                      ? `${import.meta.env.VITE_API_URL}/file/${author.avatar}`
                      : '/author.png'
                  }
                  alt="author1"
                />
                <AuthorName>{author.name}</AuthorName>
              </Author>
            ))}
          </Authors>
        </ContentHeadContainer>
      </ContentHeadSection>
    </WorkTopLayout>
  );
}

const WorkTopLayout = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  @media (max-width: 1440px) {
    flex-direction: column;
    height: auto;
  }
`;

const ThumbnailContainer = styled.div`
  flex: 1 0 0;
  align-self: stretch;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const ContentHeadSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const ContentHeadTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ContentTitle = styled.div`
  color: var(--100, #181826);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  word-break: keep-all;
  //  word-break: keep-all;
  @media (max-width: 1440px) {
    font-size: 56px;
  }
  @media (max-width: 744px) {
    font-size: 32px;
  }
`;

const ContentHeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 96px;
  @media (max-width: 1920px) {
    padding: 64px;
  }
  @media (max-width: 1440px) {
    padding: 32px;
    gap: 64px;
    justify-content: flex-start;
  }
  @media (max-width: 744px) {
    padding: 20px;
    gap: 40px;
    justify-content: flex-start;
  }
`;

const ContentDescription = styled.div`
  color: var(--300, #59596f);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  @media (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 744px) {
    font-size: 16px;
  }
`;

const Authors = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AuthorProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const AuthorName = styled.div`
  color: var(--100, #181826);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
`;
