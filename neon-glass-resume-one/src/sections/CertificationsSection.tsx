import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { ExternalLink, Award } from 'lucide-react';

// Import local PDF certificates dynamically
import salesforceCert from '../assets/SalesForce Certificate.pdf';
import jpmorganCert from '../assets/Investment Banking Virtual Experience.pdf';
import aicteCert from '../assets/AICTE technical internship Certificate.pdf';
import oracleCert from '../assets/Oracle Architect Associate Certificate.pdf';
import aviatrixCert from '../assets/Aviatrix MultiCloudNetwork certificate.pdf';

// Helper to reliably map the filenames to the imported assets
const getPdfAsset = (filename: string) => {
    switch (filename) {
        case 'SalesForce Certificate.pdf': return salesforceCert;
        case 'Investment Banking Virtual Experience.pdf': return jpmorganCert;
        case 'AICTE technical internship Certificate.pdf': return aicteCert;
        case 'Oracle Architect Associate Certificate.pdf': return oracleCert;
        case 'Aviatrix MultiCloudNetwork certificate.pdf': return aviatrixCert;
        default: return '#';
    }
};

const CertificationsSection: React.FC = () => {
    const { certifications } = profileData;

    if (!certifications || certifications.length === 0) return null;

    return (
        <section id="certifications" className="section relative">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-center relative inline-block"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        Certifications
                        <div className="h-1 w-full bg-accent/20 mt-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-accent"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {certifications.map((cert, index) => {
                        const pdfUrl = getPdfAsset(cert.pdfFile);

                        return (
                            <motion.div
                                key={`${cert.title}-${index}`}
                                className="relative z-10 group"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            >
                                {/* Animated Background Gradient Accent */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none z-0"></div>

                                <div className="relative z-10 glass p-6 md:p-8 rounded-2xl border border-border/30 shadow-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-hover:border-cyan-400/50 group-hover:shadow-[0_15px_35px_-10px_rgba(34,211,238,0.2)] bg-background/60 backdrop-blur-xl h-full flex flex-col">

                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center flex-shrink-0 border border-accent/20 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                                            <Award size={24} />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-foreground font-space tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                                                {cert.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm flex items-center gap-1.5">
                                                <span className="text-accent/80 font-medium">Issued by:</span> {cert.issuer}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 flex justify-start">
                                        <a
                                            href={pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-sm shadow-[0_4px_14px_rgba(34,211,238,0.3)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:scale-105"
                                        >
                                            View Certificate
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
