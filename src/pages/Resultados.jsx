import React from 'react';
import { motion } from 'framer-motion';

export default function Resultados() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <section className="relative pt-28 pb-10 lg:pt-36 lg:pb-14 overflow-hidden">
                <div className="absolute inset-0 bg-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-primary font-body text-sm font-semibold uppercase tracking-wider">
                            Cronometragem
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3">
                            Resultados
                        </h1>
                        <p className="mt-4 text-white/60 font-body text-lg max-w-lg">
                            Confira os resultados das corridas e encontre seu tempo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Racezone Iframe */}
            <section className="flex-1 bg-[#303030]">
                <iframe
                    src="https://pacepoint.com.br/resultados/"
                    title="Resultados Pace Point - Racezone"
                    className="w-full border-0"
                    style={{ minHeight: 'calc(100vh - 200px)', height: '800px' }}
                    allow="fullscreen"
                />
            </section>
        </div>
    );
}