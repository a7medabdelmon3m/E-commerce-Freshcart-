"use client";

import { dynamicApiAction } from "@/api/actions/routea.ctions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStar, FaEllipsisV, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import EditReviewCard from "./EditReviewCard";

export type ReviewType = {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};

type ReviewCardProps = {
  reviewItem: ReviewType;
  isMyReview?: boolean;
  onUpdate?: (review: ReviewType) => void;
  onDelete?: (reviewId: string) => void;
};

export default function ReviewCard({
  reviewItem,
  isMyReview = true,
  onUpdate,
  onDelete,
}: ReviewCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isEditMode, setisEditMode] = useState(false);
  const router = useRouter();

  const formattedDate = new Date(reviewItem.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  const avatarLetter = reviewItem.user?.name
    ? reviewItem.user.name.charAt(0).toUpperCase()
    : "U";

  const isEdited = reviewItem.createdAt !== reviewItem.updatedAt;

  async function handleDeleteReview(id: string | number) {
    const resp = await dynamicApiAction(
      `https://ecommerce.routemisr.com/api/v1/reviews/${id}`,
      undefined,
      "DELETE",
      undefined,
    );
    
    const errorMsg =
      typeof resp.error === "object"
        ? (resp.error as any)?.errors?.msg || "Failed To Delete Your Review"
        : resp.error || "Failed To Delete Your Review";
        
    if (resp.success) {
      toast.success("Your Review Is Deleted Successfully!");
      router.refresh();
    } else {
      toast.error(errorMsg);
    }
  }

  function handleEditCancelation() {
    setisEditMode(false);
  }

  return (
    <>
      {isEditMode ? (
        <EditReviewCard
          reviewItem={reviewItem}
          onCancel={handleEditCancelation}
        />
      ) : (
        <div className="p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white space-y-3.5 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex justify-center items-center rounded-full bg-main-color-subtle text-main-color font-bold text-sm sm:text-base">
                {avatarLetter}
              </div>

              <div className="min-w-0 space-y-0.5">
                <h5 className="font-bold text-xs sm:text-sm text-gray-900 capitalize truncate">
                  {reviewItem.user?.name || "User"}
                </h5>

                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                          index < reviewItem.rating
                            ? "text-amber-400"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-700 ml-0.5">
                    {reviewItem.rating?.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
              {isEdited && (
                <span className="text-[10px] sm:text-xs font-medium italic text-gray-400/80">
                  (Edited)
                </span>
              )}
              
              <span className="text-[10px] sm:text-xs font-medium text-gray-400">
                {formattedDate}
              </span>

              {isMyReview && (
                <div className="relative">
                  <Button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    title="Options"
                    variant="ghost"
                  >
                    <FaEllipsisV className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Button>

                  {showMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowMenu(false)}
                      />

                      <div className="absolute right-0 top-7 w-28 sm:w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-20 space-y-0.5 text-xs font-medium">
                        <Button
                          onClick={() => {
                            setShowMenu(false);
                            setisEditMode(true);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-main-color transition-colors cursor-pointer"
                          variant="ghost"
                        >
                          <FaPencilAlt className="w-3 h-3" />
                          Edit
                        </Button>

                        <Button
                          onClick={() => {
                            setShowMenu(false);
                            handleDeleteReview(reviewItem._id);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          variant="ghost"
                        >
                          <FaTrashAlt className="w-3 h-3" />
                          Delete
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="p-3 sm:p-3.5 bg-gray-50/80 border border-gray-100 rounded-xl">
            <p className="text-xs sm:text-sm font-normal text-gray-700 leading-relaxed wrap-break-words">
              &quot;{reviewItem.review}&quot;
            </p>
          </div>
        </div>
      )}
    </>
  );
}