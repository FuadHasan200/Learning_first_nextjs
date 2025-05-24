import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:['400','500','700'],
  subsets: ["latin"],
})
export default function Services() {
  const data = [
    {
      id: 1,
      service_name: "Web Design",
      service_image: "/promo-4.png",
      description:
        "Professional and modern website design tailored to your brand.",
    },
    {
      id: 2,
      service_name: "SEO Optimization",
      service_image: "/blog-1.jpg",
      description:
        "Boost your website's visibility on search engines with expert SEO.",
    },
    {
      id: 3,
      service_name: "Content Writing",
      service_image: "/blog-2.jpg",
      description:
        "Engaging and SEO-friendly content writing for blogs, websites, and more.",
    },
    {
      id: 4,
      service_name: "Social Media Management",
      service_image: "/blog-3.jpg",
      description:
        "Manage and grow your social media presence across all platforms.",
    },
    {
      id: 5,
      service_name: "Graphic Design",
      service_image: "/cta-banner.png",
      description:
        "Eye-catching graphic designs for logos, banners, ads, and more.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-3xl text-center bg-blue-400 ">
        This is service page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
      data.map((d,id) => {
          return(
           <div className={`${roboto.className} card w-75 mt-10 mb-10`} key={id}>
              <Image width={500} height={500}  src={d.service_image} alt="no image" />
              <div className="p-3">
                <p className="text-lg font-semibold">{d.service_name}</p>
              <p className="text-gray-500">{d.description}</p>
              <span>Click : </span>
              <Link href={`/Services/${d.id}`}>
                <button className="btn btn-warning" type="button">Detail</button>
              </Link>
              </div>
           </div>
          )
      })
      }
      </div>
    </div>
  );
}
