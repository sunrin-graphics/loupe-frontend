import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '@/components/common/Header';
import MemberCard from '@/components/MemberCard';
import { motion } from 'framer-motion';
import {
  PageLayout,
  PageTitle,
  Section,
  SectionTop,
} from '@/components/shared/Styles';
import { useUsers } from '@/hooks/user';

export default function Member() {
  const { data: users } = useUsers();

  const gridAnimation = {
    show: {
      transition: { staggerChildren: 0.1 },
    },
    hide: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  return (
    <PageLayout>
      <Header scroll={{ y: 50 }} />
      <Section>
        <SectionTop>
          <PageTitle>참여 인원</PageTitle>
        </SectionTop>
        {users && (
          <MemberCardContainer
            variants={gridAnimation}
            animate="show"
            exit="hide"
          >
            {users?.map(
              (user) =>
                user.name !== '콘텐츠디자인과 22인' && (
                  <MemberCard
                    key={user.uuid}
                    name={user.name}
                    mail={user.email}
                    avatar={user.avatar}
                    insLink={user.instagram}
                    poLink={user.portfolio}
                    artLink={user.made?.[0]?.work.uuid}
                  />
                ),
            )}
          </MemberCardContainer>
        )}
      </Section>
      <Footer />
    </PageLayout>
  );
}

const MemberCardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
  flex-direction: column;
  width: 100%;
  padding: 24px 0px;
  align-items: flex-start;
  gap: 48px 16px;
`;
