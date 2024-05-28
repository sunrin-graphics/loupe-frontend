import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Member from './pages/Member';
import Main from './pages/Main';
import Work from './pages/Work';
import Guestbook from './pages/Guestbook';
import WorkList from './pages/WorkList';
import QueryProvider from './components/provider/QueryProvider';

// 브라우저 라우터 만들기
// 파라미터로 경로와 컴포넌트 입력하기
const router = createBrowserRouter(
  [
    {
      path: '/work/:id',
      element: <Work />,
    },
    {
      path: '/member',
      element: <Member />,
    },
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/guestbook',
      element: <Guestbook />,
    },
    {
      path: '/works',
      element: <WorkList />,
    },
  ],
  {
    basename: '/2024',
  },
);

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 600,
  offset: 200,
});

// 프로바이더로 리액트 라우터 등록하기
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>,
);
