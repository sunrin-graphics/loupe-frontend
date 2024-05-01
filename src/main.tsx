import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Work from './pages/Work';
import Member from './pages/Member';
import Main from './pages/Main';

// 브라우저 라우터 만들기
// 파라미터로 경로와 컴포넌트 입력하기
const router = createBrowserRouter([
  {
    path: '/work',
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
]);

// 프로바이더로 리액트 라우터 등록하기
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
