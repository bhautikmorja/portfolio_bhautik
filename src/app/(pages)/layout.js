import { Inter } from "next/font/google";
import "../../../public/stylesheets/style.css"
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhautik Morja",
  description: "Bhautik Morja's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*Favicon  */}
        <link
          rel="shortcut icon"
          href="/images/my-avatar.png"
          type="image/x-icon"
        />
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

        {/* Script */}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
        <script src="/javascripts/script.js"></script>
      </head>
      <body className={inter.className}>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
