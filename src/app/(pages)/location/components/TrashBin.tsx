"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from "next/image";

const LOCATIONS = ["백양로", "한글탑", "국제캠"];

export default function TrashBin() {
  // 아코디언 열림/닫힘
  const [isOpen, setIsOpen] = useState(false);
  // 현재 선택된 탭(위치)
  const [activeTab, setActiveTab] = useState(LOCATIONS[0]);

  return (
    <div className="mb-6 bg-white rounded-2xl shadow">
      {/* 헤더 */}
      <button
        className="w-full flex items-center justify-between px-4 py-3"
        onClick={() => setIsOpen((o) => !o)}
      >
        <div className="flex items-center space-x-2">
          <FaTrash className="text-[#0762AD] text-xl" />
          <span className="font-medium text-black">쓰레기통</span>
        </div>
        {isOpen ? (
          <HiChevronUp className="text-[#0E4B68] text-xl" />
        ) : (
          <HiChevronDown className="text-[#0E4B68] text-xl" />
        )}
      </button>

      {/* 내용 */}
      {isOpen && (
        <div className="border-t border-[#DEE2E6] px-4 pb-4">
          {/* 탭 네비게이션 */}
          <div className="flex justify-center space-x-6 overflow-x-auto mt-4">
            {LOCATIONS.map((loc) => (
              <button
                key={loc}
                className={`pb-1 ${
                  activeTab === loc
                    ? "text-[#0762AD] font-semibold"
                    : "text-[#B5BBC1] hover:text-[#0762AD]"
                }`}
                onClick={() => setActiveTab(loc)}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* 이미지 한 장만 표시 */}
          <div className="mt-4">
            <Image
              src={`/img/trash-${activeTab}.png`}
              alt={`쓰레기통 위치 (${activeTab})`}
              width={720}
              height={480}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
