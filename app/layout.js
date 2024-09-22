export const metadata = {
  title: "Mentor Connect",
  description: "Your go-to for guidance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
