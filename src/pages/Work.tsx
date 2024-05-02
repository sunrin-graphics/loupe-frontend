import Footer from '@/components/common/Footer';
import WorkTop from '@/components/work/WorkTop';
import WorkMain from '@/components/work/WorkMain';
import { PageLayout } from '../components/shared/Styles';
import Header from '../components/common/Header';

function Work() {
  return (
    <PageLayout>
      <Header
        scroll={{
          transparent: true,
          y: 40,
        }}
      />
      <WorkTop />
      <WorkMain />
      <Footer />
    </PageLayout>
  );
}

export default Work;
