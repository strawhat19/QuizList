'use client';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { brandName, icon } from '@/app/shared/library/common/constants';

type Props = {
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
};

export default function PageContainer({ title, description, children }: Props | any) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} | {brandName} Official</title>
        <link rel={`manifest`} href={`/manifest.json`} />
        <meta name={`theme-color`} content={`#000000`} />
        <meta name={`description`} content={description} />
        <link rel={`apple-touch-icon`} href={`/icons/icon-192x192.png`} />
        <link rel={`icon`} href={`/images/logos/${icon}`} type={`image/x-icon`} />
        <meta name={`viewport`} content={`width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no`} />
        <link rel={`stylesheet`} href={`https://use.fontawesome.com/releases/v5.8.1/css/all.css`} integrity={`sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf`} crossOrigin={`anonymous`} />
      </Helmet>
      {children}
    </HelmetProvider>
  )
};