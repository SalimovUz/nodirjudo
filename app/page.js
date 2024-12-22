// import Image from "next/image";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import SendIcon from "@mui/icons-material/Send";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NearMeIcon from "@mui/icons-material/NearMe";
// import PhoneIcon from "@mui/icons-material/Phone";
// import Judo from "@/public/judo.jpg";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center">
//       {/* Header Section */}
//       <div className="text-center py-8">
//         <Image
//           src={Judo}
//           alt="Logo"
//           className="w-32 h-32 mx-auto rounded-full shadow-md"
//         />
//         <h1 className="text-4xl font-extrabold text-blue-800 mt-4">
//           Nodir Judo
//         </h1>
//         <p className="text-gray-700 mt-2 text-lg tracking-wide">
//           Erkaklar kiyim do'koni
//         </p>
//       </div>

//       {/* Social Media Links */}
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6">
//         <h1 className="text-center text-xl font-semibold text-blue-800">
//           Ijtimoiy tarmoqlarimiz!
//         </h1>
//         <a
//           href="https://t.me/nodir_judo_uz"
//           className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition"
//         >
//           <TelegramIcon className="text-blue-600 text-3xl" />
//           <div>
//             <h1 className="text-lg font-bold">Telegram</h1>
//             <p className="text-gray-600">@Nodir_judo_uz</p>
//           </div>
//         </a>
//         <a
//           href="https://www.instagram.com/nodir_judo_uz/"
//           className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-50 transition"
//         >
//           <InstagramIcon className="text-pink-500 text-3xl" />
//           <div>
//             <h1 className="text-lg font-bold">Instagram</h1>
//             <p className="text-gray-600">@Nodir_judo_uz</p>
//           </div>
//         </a>
//         <a
//           href="https://t.me/nodir_judo_uz1"
//           className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition"
//         >
//           <SendIcon className="text-blue-500 text-3xl" />
//           <div>
//             <h1 className="text-lg font-bold">Telegram Admin</h1>
//             <p className="text-gray-600">@Nodir_judo_uz1</p>
//           </div>
//         </a>
//         {/* Phone Number */}
//         <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition">
//           <PhoneIcon className="text-green-500 text-3xl" />
//           <div>
//             <h1 className="text-lg font-bold">Bog'lanish</h1>
//             <p className="text-gray-600">+998 99 935 72 22</p>
//           </div>
//         </div>
//       </div>

//       {/* Locations Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 mt-10 mb-8">
//         <h1 className="text-center text-xl font-semibold text-blue-800">
//           Manzil (Filiallarimiz)
//         </h1>
//         <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
//           <LocationOnIcon className="text-red-500 text-3xl" />
//           <div>
//             <h1 className="text-lg font-bold">AbuSaxiy Center</h1>
//             <p className="text-gray-600">1-qavat D-90 (6:00 - 18:00)</p>
//           </div>
//         </div>
//         <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
//           <LocationOnIcon className="text-red-500 text-3xl" />
//           <div>
//             <h1 className="text-lg font-bold">AbuSaxiy Center</h1>
//             <p className="text-gray-600">2-qavat B-77 (6:00 - 18:00)</p>
//           </div>
//         </div>
//         <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
//           <NearMeIcon className="text-green-500 text-3xl" />
//           <div>
//             <a
//               href="https://maps.app.goo.gl/ZEoNCx3wXhbDqU6i8"
//               className="text-blue-600 hover:underline"
//             >
//               Lokatsiya
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import Snowfall from "react-snowfall"; // Yangi yil qori
import Judo from "@/public/judo.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-white to-green-100 flex flex-col items-center relative">
      {/* Snowfall effect */}
      <Snowfall color="#fff" snowflakeCount={100} />

      {/* Header Section */}
      <div className="text-center py-8">
        <Image
          src={Judo}
          alt="Logo"
          className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-green-500"
        />
        <h1 className="text-5xl font-extrabold text-red-800 mt-4">
          Nodir Judo 🎄
        </h1>
        <p className="text-gray-800 mt-2 text-lg tracking-wide">
          Yangi Yilingiz bilan!
        </p>
      </div>

      {/* Social Media Links */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 border-2 border-red-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Ijtimoiy tarmoqlarimiz!
        </h1>
        <a
          href="https://t.me/nodir_judo_uz"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition"
        >
          <TelegramIcon className="text-blue-600 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram</h1>
            <p className="text-gray-600">@Nodir_judo_uz</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/nodir_judo_uz/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-50 transition"
        >
          <InstagramIcon className="text-pink-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Instagram</h1>
            <p className="text-gray-600">@Nodir_judo_uz</p>
          </div>
        </a>
        <a
          href="https://t.me/nodir_judo_uz1"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition"
        >
          <SendIcon className="text-blue-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram Admin</h1>
            <p className="text-gray-600">@Nodir_judo_uz1</p>
          </div>
        </a>
        {/* Phone Number */}
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition">
          <PhoneIcon className="text-green-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Bog'lanish</h1>
            <p className="text-gray-600">+998 99 935 72 22</p>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 mt-10 mb-8 border-2 border-green-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Manzil (Filiallarimiz)
        </h1>
        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">AbuSaxiy Center</h1>
            <p className="text-gray-600">1-qavat D-90 (6:00 - 18:00)</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">AbuSaxiy Center</h1>
            <p className="text-gray-600">2-qavat B-77 (6:00 - 18:00)</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
          <NearMeIcon className="text-green-500 text-3xl" />
          <div>
            <a
              href="https://maps.app.goo.gl/ZEoNCx3wXhbDqU6i8"
              className="text-blue-600 hover:underline"
            >
              Lokatsiya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
