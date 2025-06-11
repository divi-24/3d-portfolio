import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { certificates } from "../constants";

const CertificateCard = ({ index, certificate, handleClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full sm:w-[350px] h-[300px] rounded-lg overflow-hidden cursor-pointer"
      onClick={() => handleClick(certificate)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
      <Image
        src={certificate.image}
        alt={certificate.title}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-0 p-4 z-20">
        <h3 className="text-white text-xl font-bold">{certificate.title}</h3>
        <p className="text-white/80 text-sm mt-1">{certificate.issuer}</p>
      </div>
    </motion.div>
  );
};

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {certificate.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {certificate.issuer}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {certificate.description}
          </p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certifications" className="paddingX py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Achievements
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Certifications
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.title}
            index={index}
            certificate={certificate}
            handleClick={setSelectedCertificate}
          />
        ))}
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default Certifications; 