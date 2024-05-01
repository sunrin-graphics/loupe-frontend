import Footer from '../components/Footer';
import WorkTop from '../components/WorkTop';
import WorkMain from '../components/WorkMain';
import HeaderScroll from '../components/HeaderScroll';
import { PageLayout } from '../components/shared/styles';

function Work() {
  return (
    <PageLayout>
      <HeaderScroll />
      <WorkTop />
      <WorkMain />
      <Footer />
    </PageLayout>
  );
}

export default Work;
