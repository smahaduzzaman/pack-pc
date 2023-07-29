import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

// export default function MyApp({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   const getLayout = Component.getLayout || ((page) => page);

//   return (
//     <SessionProvider session={pageProps.session}>
//       {getLayout(<Component {...pageProps} />)}
//     </SessionProvider>
//   );
// }