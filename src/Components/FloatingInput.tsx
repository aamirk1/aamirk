"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingInputProps {
  id: string;
  name: string;
  value: string;
  handleChange?: (id: string, value: string) => void;
  type?: string;
  rows?: number;
}

const FloatingInput = ({ id, name, value, handleChange, type = "text", rows = 4 }: FloatingInputProps) => {
  const isTextArea = id === "message";

  return (
    <div className="relative w-full group">
      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          rows={rows}
          onChange={(e) => handleChange?.(id, e.target.value)}
          className="block px-4 pb-3 pt-6 w-full text-base sm:text-lg text-foreground bg-transparent rounded-2xl border-2 border-border/80 appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer transition-all duration-300 hover:border-primaryColor/40 resize-none min-h-[140px]"
          placeholder=" "
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => handleChange?.(id, e.target.value)}
          className="block px-4 pb-3 pt-6 w-full text-base sm:text-lg text-foreground bg-transparent rounded-2xl border-2 border-border/80 appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer transition-all duration-300 hover:border-primaryColor/40"
          placeholder=" "
        />
      )}
      
      <label
        htmlFor={id}
        className="absolute text-muted-foreground font-bold text-sm sm:text-base duration-300 transform -translate-y-4 scale-90 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4 peer-focus:text-primaryColor pointer-events-none uppercase tracking-widest text-[10px]"
      >
        {name}
      </label>

      {/* Decorative Focus Border */}
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primaryColor transition-all duration-500 ease-out group-focus-within:w-[90%] group-focus-within:left-[5%] rounded-full opacity-60" />
    </div>
  );
};

export default FloatingInput;
