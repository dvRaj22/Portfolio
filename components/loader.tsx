"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 border-4 border-primary rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 1.2, 1],
              opacity: [1, 0.8, 0.2, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-primary rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 1.2, 1],
              opacity: [1, 0.8, 0.2, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              delay: 0.3,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.p
          className="mt-4 text-xl font-medium text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}

