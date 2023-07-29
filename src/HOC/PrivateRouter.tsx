import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Prop = {
  children: React.ReactElement;
  redirectPath?: string;
  isAllowed?: boolean;
};

export default function PrivateRouter({
  children,
  redirectPath = '/',
  isAllowed,
}: Prop): JSX.Element {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;
  return children || <Outlet />;
}
