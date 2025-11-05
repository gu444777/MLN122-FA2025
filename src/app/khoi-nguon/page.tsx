"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function KhoiNguon() {
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
          Khởi nguồn của tài chính trong xã hội cổ đại
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-slate-300 mb-8 text-lg"
        >
          Tài chính ra đời gắn liền với sự hình thành Nhà nước và thuế khóa.
          Trong các nền văn minh cổ đại như Ai Cập, Lưỡng Hà, Hy Lạp, và La Mã,
          tài chính chủ yếu phục vụ việc thu thuế, chi tiêu cho quốc phòng, xây
          dựng công trình công cộng, và duy trì quyền lực chính trị. Đây là giai
          đoạn sơ khai nhưng đã đặt nền móng cho các hoạt động tài chính – ngân
          hàng sau này.
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
