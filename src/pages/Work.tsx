import Footer from '../components/Footer';
import WorkTop from '../components/WorkTop';
import WorkMain from '../components/WorkMain';
import { PageLayout } from '../components/shared/styles';
import Header from '../components/Header';

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
