import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="circuit-bg min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}