import styled from 'styled-components';

interface Props {
  name: string;
  avatar?: string;
  email: string;
}
export default function ContentAuthor({ name, avatar, email }: Props) {
  return (
    <ContentAuthorLayout>
      <ContentAuthorProfile
        src={
          avatar
            ? `${import.meta.env.VITE_API_URL}/file/${avatar.split('/')[0]}/middle.png`
            : '/author.png'
        }
        alt="author1"
      />
      <ContentAuthorInfo>
        <ContentAuthorName>{name}</ContentAuthorName>
        <ContentAuthorEmail>{email}</ContentAuthorEmail>
      </ContentAuthorInfo>
    </ContentAuthorLayout>
  );
}

const ContentAuthorLayout = styled.div`
  display: flex;
  min-width: 256px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const ContentAuthorProfile = styled.img`
  border-radius: 40px;
  width: 40px;
  height: 40px;
`;

const ContentAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ContentAuthorName = styled.div`
  color: var(--200, #302f4b);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`;

const ContentAuthorEmail = styled.div`
  color: var(--400, #878797);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
