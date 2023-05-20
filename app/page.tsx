import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
// import { initFirebase } from "../firebase/firebaseApp";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // initFirebase();
  // // console.log(app);
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();

  // const signIn = async () => {
  //   const result = await signInWithPopup(auth, provider);
  //   console.log(result.user);
  // };

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
