import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function MainBackground(p) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.4 + i * 0.1;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  return (
    <MainLayout>
      <MainLayoutContent>
        <Title initial="hidden" animate="visible" variants={titleAnimation}>
          제13회 선린인터넷고등학교 콘텐츠디자인과 졸업전시회
        </Title>

        <motion.svg
          initial="hidden"
          animate="visible"
          width="1082"
          height="431"
          viewBox="0 0 1082 431"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M16 167.218C16 167.218 48.8653 150.848 104.942 112.87C152.357 80.7593 141.731 31.8277 102.665 50.8277C63.598 69.8277 58.5513 116.483 95.117 211.393C131.683 306.303 138.143 369.878 101.082 373.913C88.4651 375.288 61.9491 354.067 100.389 319.51C150.638 253.792 224.636 291.433 250.196 225.334"
            stroke="url(#paint0_linear_292_785)"
            strokeWidth="31.4948"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={0}
          />
          <motion.path
            d="M249.092 144.027C254.492 53.3963 285.155 27.9691 318.795 22.5318C352.435 17.0946 394.063 29.8068 402.005 88.4173C409.947 147.028 382.921 186.376 351.161 191.51C319.401 196.643 299.216 172.832 292.883 159.343"
            stroke="url(#paint1_linear_292_785)"
            strokeWidth="31.4948"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={1}
          />
          <motion.path
            d="M666.716 51.0183C654.207 51.091 636.112 16.0187 636.112 16.0187C636.112 16.0187 657.172 181.546 550.769 177.639C444.352 173.732 475.979 16.9496 475.979 16.9496C475.979 16.9496 458.35 52.2297 443.359 52.3168"
            stroke="url(#paint2_linear_292_785)"
            strokeWidth="31.4948"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={2}
          />
          <motion.path
            d="M719.261 52.7079C719.261 52.7079 752.364 1.1011 831.473 29.6669C870.033 43.5881 914.294 77.6065 882.925 145.167C851.556 212.728 744.171 159.456 720.331 129.613C720.331 129.613 709.39 171.903 714.587 210.144"
            stroke="url(#paint3_linear_292_785)"
            strokeWidth="31.4948"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={3}
          />
          <motion.path
            d="M1065.31 68.664C1065.31 68.664 1013.54 118.803 953.117 102.228C953.117 102.228 947.318 203.175 869.397 272.739C869.397 272.739 992.748 327.593 1038.75 414.8"
            stroke="url(#paint4_linear_292_785)"
            strokeWidth="31.4948"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={4}
          />
          <motion.path
            d="M929.414 189.756C929.414 189.756 978.457 238.107 1051.98 231.961"
            stroke="url(#paint5_linear_292_785)"
            strokeWidth="31.4948"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={5}
          />
          <motion.defs>
            <linearGradient
              id="paint0_linear_292_785"
              x1="133.098"
              y1="46.5732"
              x2="133.098"
              y2="372.722"
              gradientUnits="userSpaceOnUse"
            >
              <motion.stop stopColor="#BDA6FF" />
              <motion.stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_292_785"
              x1="310.64"
              y1="23.8499"
              x2="337.975"
              y2="192.974"
              gradientUnits="userSpaceOnUse"
            >
              <motion.stop stopColor="#BDA6FF" />
              <motion.stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_292_785"
              x1="556.454"
              y1="13.094"
              x2="550.436"
              y2="176.996"
              gradientUnits="userSpaceOnUse"
            >
              <motion.stop stopColor="#BDA6FF" />
              <motion.stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_292_785"
              x1="814.476"
              y1="23.9519"
              x2="786.49"
              y2="219.658"
              gradientUnits="userSpaceOnUse"
            >
              <motion.stop stopColor="#BDA6FF" />
              <motion.stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_292_785"
              x1="971.225"
              y1="65.2097"
              x2="958.547"
              y2="410.526"
              gradientUnits="userSpaceOnUse"
            >
              <motion.stop stopColor="#BDA6FF" />
              <motion.stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_292_785"
              x1="991.387"
              y1="192.032"
              x2="989.969"
              y2="230.653"
              gradientUnits="userSpaceOnUse"
            >
              <motion.stop stopColor="#BDA6FF" />
              <motion.stop offset="1" stopColor="white" />
            </linearGradient>
          </motion.defs>
        </motion.svg>
      </MainLayoutContent>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const MainLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
  gap: 32px;
`;

const Title = styled(motion.div)`
  color: #fff;
  font-family: SUITE;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;
