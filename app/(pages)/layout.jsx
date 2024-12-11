import MainHeader from "@/components/layouts/Headers/Header";

export default function PagesLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <MainHeader />
          {children}
        </body>
      </html>
    );
  }
  