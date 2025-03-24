"use client";
import { useStore } from "@/providers/Store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Toaster() {
  const { message, setMessage } = useStore((state) => state);
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setMessage(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  if (!visible) return null;
  const getBackgroundColor = () => {
    if (message?.type === "success") {
      return "bg-green-500";
    }
    if (message?.type === "error") {
      return "bg-red-500";
    }
    return "bg-blue-500";
  };

  return (
    <AnimatePresence>
      {visible && message && (
        <motion.div
          className={`fixed right-0 bottom-0 z-50 flex w-full justify-center ${getBackgroundColor()}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-var(--light) text-var(--dark) rounded-md p-1">
            {message.text}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
