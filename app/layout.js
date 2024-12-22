import "./globals.css";

export const metadata = {
  title: "Nodir Judo",
  description: "Created by Salimov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
