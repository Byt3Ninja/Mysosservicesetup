import { motion } from 'motion/react';
import appLogo from 'figma:asset/bb5b37bda783ba021845fb1b2c4aa7a6ef0ca067.png';
import { useLanguage } from '../contexts/LanguageContext';

export function SplashScreen() {
  const { t } = useLanguage();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-600 via-red-500 to-orange-500 relative overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <img 
              src={appLogo} 
              alt="MySOS Logo" 
              className="h-32 w-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center px-8"
        >
          <p className="text-white/90 text-lg mb-1">
            {t('emergency.services')}
          </p>
          <p className="text-white/80 text-sm">
            {t('help.when.needed')}
          </p>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0,
              }}
            />
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.2,
              }}
            />
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.4,
              }}
            />
          </div>
        </motion.div>

        {/* Emergency Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="text-white/70 text-sm">
            {t('emergency.hotline')}
          </p>
          <p className="text-white text-2xl mt-1">
            12345
          </p>
        </motion.div>
      </div>
    </div>
  );
}