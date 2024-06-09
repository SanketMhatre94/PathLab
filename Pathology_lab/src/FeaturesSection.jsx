import React from 'react';

const features = [
  {
    title: 'NABL Accredited Labs',
    description: 'Follows all protocols as per NABL & CAP Guidelines',
    icon: 'https://en.pimg.jp/066/046/514/1/66046514.jpg', // replace with actual icon path
  },
  {
    title: 'Trusted by Leading Doctors & Hospitals',
    description: 'Qualified Pathologist at each lab',
    icon: 'https://img.lovepik.com/element/45016/7396.png_860.png', // replace with actual icon path
  },
  {
    title: 'Shortest Reporting Time',
    description: 'Ownership and Innovation',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSe7Xd6zbsgNcdgR8dgjfQZcwp2LZ_Tu1ruA&s', // replace with actual icon path
  },
  {
    title: 'Accurate Test Reports',
    description: 'Quality checks by Quality Assurance Team',
    icon: 'https://www.creativefabrica.com/wp-content/uploads/2023/01/07/Analytics-report-icon-Graphics-56724488-1.jpg', // replace with actual icon path
  },
  {
    title: ' Satisfied Customers',
    description: 'Making superior quality diagnostics services',
    icon: 'https://thumbs.dreamstime.com/z/customer-satisfaction-rgb-color-icon-customer-satisfaction-rgb-color-icon-good-reputation-development-satisfied-clients-positive-203691004.jpg', // replace with actual icon path
  },
  {
    title: 'Labs',
    description: 'Large Network Labs in all the major cities',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8nj7k4tx7Lt2sP41JAqZchxmd1NcUm4HKQ&s', // replace with actual icon path
  },
  {
    title: ' Collection Centres',
    description: 'Expanding Our reach and counting',
    icon: 'data:image/png;base64,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', // replace with actual icon path
  },
  {
    title: 'Scientific Orientation',
    description: 'MD Doctors in Every Lab State-of-the-Art Machines',
    icon: 'https://cdn-icons-png.flaticon.com/256/1792/1792490.png', // replace with actual icon path
  },
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-start">
    <img src={icon} alt={title} className="w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="container mx-auto py-12">
    <h2 className="text-3xl font-bold text-center mb-8">Why Pathalogy Labs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </div>
);

export default FeaturesSection;
