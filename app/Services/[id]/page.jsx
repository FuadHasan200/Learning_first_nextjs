import Link from "next/link";
import React from "react";

function ServiceDetailPage({ params }) {
  const id = params?.id;
  const data = [
    {
      id: 1,
      service_name: "Web Design",
      service_image: "https://i.ibb.co.com/8L9KX8R4/blog-1.jpg",
      description:
        "Professional and modern website design tailored to your brand.",
    },
    {
      id: 2,
      service_name: "SEO Optimization",
      service_image: "https://i.ibb.co.com/JWGXjCVC/blog-2.jpg",
      description:
        "Boost your website's visibility on search engines with expert SEO.",
    },
    {
      id: 3,
      service_name: "Content Writing",
      service_image: "https://i.ibb.co.com/YnTx2ks/blog-3.jpg",
      description:
        "Engaging and SEO-friendly content writing for blogs, websites, and more.",
    },
    {
      id: 4,
      service_name: "Social Media Management",
      service_image: "https://i.ibb.co.com/Y4s4yFzv/cta-banner.png",
      description:
        "Manage and grow your social media presence across all platforms.",
    },
    {
      id: 5,
      service_name: "Graphic Design",
      service_image: "https://i.ibb.co.com/N6j15JD0/banner-1.jpg",
      description:
        "Eye-catching graphic designs for logos, banners, ads, and more.",
    },
  ];
  
  const sinData = data.find((d) => d.id == id);
  if(sinData){
      return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={sinData.service_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{sinData.service_name}</h1>
            <p className="py-6">
              {sinData.description}
            </p>
            <Link href="/Services">
            <button className="btn btn-primary">Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  }
  else{
    return(
      <div> Not found any Service</div>
    )
  }
 
}

export default ServiceDetailPage;
