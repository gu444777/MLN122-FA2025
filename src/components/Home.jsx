"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <BookOpen className="w-7 h-7 text-indigo-400" />
            <h1 className="text-xl font-bold tracking-wide text-indigo-300 hover:text-indigo-400 transition-colors">
              Financial History
            </h1>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:flex space-x-8 text-sm font-medium"
          >
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Trang chủ
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Giới thiệu
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Các sự kiện
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Liên hệ
            </a>
          </motion.nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-indigo-300 mb-6 drop-shadow-lg"
        >
          Các Sự Kiện Trong Lịch Sử Tài Chính
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-slate-300 mb-8 text-lg"
        >
          Khám phá những bước ngoặt tài chính đã định hình nên thế giới hiện
          đại, từ chủ nghĩa trọng thương đến thời đại Fintech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/khoi-nguon">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 text-lg rounded-xl shadow-lg">
              Bắt đầu khám phá
              <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
