// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'utfs.io',
//       },
//       {
//         protocol: 'https',
//         hostname: 'cdn.pixabay.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'hnfetimxhezkhdgcdshw.supabase.co',
//       },
//       {
//         protocol: 'https',
//         hostname: 'lh3.googleusercontent.com',
//       },
//     ],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'hnfetimxhezkhdgcdshw.supabase.co', // Correct Supabase hostname already here
      },
      {
        protocol: 'https',
        hostname: 'ncwivededkpsjvuiwjeb.supabase.co', // Add this hostname to support the image you're trying to load
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
