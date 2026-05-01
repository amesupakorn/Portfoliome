export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
  credentialId?: string;
}

const certificates: Certificate[] = [
  {
    title: "HCCDA-Tech Essentials (HUAWEI CLOUD Developer Certification)",
    issuer: "HUAWEI CLOUD",
    date: "Sep 2023",
    link: "/certi/HWENDCTEDA.pdf",
    image: "/logo/Huawei_logo.png",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy / EEC Automation Park",
    date: "Nov 24, 2021",
    link: "/certi/SupakornThongaerd-Cybersecurity Es-certificate-2.pdf",
    image: "/logo/Cisco_logo.png",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco Networking Academy / EEC Automation Park",
    date: "Nov 14, 2021",
    link: "/certi/SupakornThongaerd-Introduction to -certificate-2.pdf",
    image: "/logo/Cisco_logo.png",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy / EEC Automation Park",
    date: "Nov 24, 2021",
    link: "/certi/SupakornThongaerd-Introduction to -certificate.pdf",
    image: "/logo/Cisco_logo.png",
  }
];

export default certificates;
