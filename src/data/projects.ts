// data/projects.ts
export type Project = {
  id: string;
  title: string;
  shortDesc: string;
  longDesc?: string;
  tech: string[];
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  adminDemoVideo?: string;
  adminDemoReadOnlyUrl?: string;
  images?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "klikchat",
    title: "KlikChat",
    shortDesc:
      "Real-time encrypted chat app with Google Auth, image uploads, admin panel.",
    longDesc:
      "Built full-stack chat app using Socket.io, Node, React. Includes end-to-end encryption, image sharing, and admin panel for monitoring users and chats.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
    tags: ["Realtime", "Admin", "Auth"],
    demoUrl: "https://klikchat-demo.example.com",
    repoUrl: "https://github.com/your/klikchat",
    adminDemoVideo: "https://www.loom.com/share/your-looom-link",
    adminDemoReadOnlyUrl: "https://klikchat-demo.example.com/admin-demo",
    images: ["/projects/klikchat-1.png", "/projects/klikchat-2.png"],
    featured: true,
  },
  {
    id: "marble-decor-admin",
    title: "Marble Decor Admin Panel",
    shortDesc:
      "Product upload + Cloudinary image editing, role based access, product management.",
    longDesc:
      "Advanced admin panel for managing marble decor products, uploading/editing images via Cloudinary, with role-based access and product categories.",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Tailwind"],
    tags: ["Admin", "Ecommerce"],
    repoUrl: "https://github.com/your/marble-decor-admin",
    adminDemoVideo: "https://www.loom.com/share/your-looom-link",
    featured: true,
  },
  {
    id: "stayfinder",
    title: "StayFinder Auth System",
    shortDesc:
      "Airbnb-style login with OTP flow, Google login, and profile completion form.",
    longDesc:
      "Login/register system with mobile OTP, Google login, email login, profile completion. Fully integrated with Next.js and Firebase.",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    tags: ["Auth", "UX"],
    repoUrl: "https://github.com/your/stayfinder",
    featured: true,
  },
  // Mini Projects
  {
    id: "mind-forge-ai",
    title: "Mind Forge AI Landing",
    shortDesc:
      "AI-powered landing page with 3D models, animations, and Lottie integration.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
    tags: ["Frontend", "3D", "Animations"],
    demoUrl: "https://mind-forge-ai-saas-frontend.vercel.app/",
    repoUrl: "https://github.com/your/mind-forge-ai",
    featured: false,
  },
  {
    id: "klik-admin-mini",
    title: "Mini Admin Dashboard",
    shortDesc:
      "Practice admin panel for CRUD operations with React + Tailwind.",
    tech: ["React", "Tailwind", "LocalStorage"],
    tags: ["Admin", "Practice"],
    featured: false,
  },
];
