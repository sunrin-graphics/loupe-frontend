import Footer from '@/components/common/Footer';
import WorkTop from '@/components/work/WorkTop';
import WorkMain from '@/components/work/WorkMain';
import { PageLayout } from '../components/shared/Styles';
import Header from '../components/common/Header';
import { useParams } from 'react-router-dom';
import { useWork } from '@/hooks/work';

function Work() {
  const { id } = useParams();
  const { data: work } = useWork(id as string);

  return (
    <PageLayout>
      <Header
        scroll={{
          transparent: true,
          y: 40,
        }}
      />
      <WorkTop
        title={work?.title ?? ''}
        description={work?.description ?? ''}
        authors={work?.made?.map((m) => m?.user) ?? []}
        thumbnail={work?.thumbnail ?? ''}
      />
      <WorkMain
        youtubeUrl={work?.youtubeUrl}
        artworks={work?.artwork ?? []}
        authors={work?.made?.map((m) => m?.user) ?? []}
      />
      <Footer />
    </PageLayout>
  );
}

export default Work;
