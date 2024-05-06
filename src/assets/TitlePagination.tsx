import styled from 'styled-components';
import { PageTitle } from '../shared/Styles';

interface Props {
  title: string[];
  setTitle: (title: string) => void;
}
export default function TitlePagination({ title, setTitle }: Props) {
  return (
    <Layout>
      {title.map((title, index) => (
        <PageTitle key={index} onClick={() => setTitle(title)}>
          {title}
        </PageTitle>
      ))}

      <Blur />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const Blur = styled.div`
  position: absolute;
  left: 0;

  width: 240px;
  height: 100px;
  flex-shrink: 0;

  background: linear-gradient(240deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
`;
