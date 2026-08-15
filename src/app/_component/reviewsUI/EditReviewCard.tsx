"use client";

import { dynamicApiAction } from "@/api/actions/routea.ctions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { ReviewType } from "./ReviewCard"; 

type EditReviewCardProps = {
  reviewItem: ReviewType;
  onCancel: () => void; 
  onSuccess?: () => void; 
};

export default function EditReviewCard({
  reviewItem,
  onCancel,
  onSuccess,
}: EditReviewCardProps) {
  const router = useRouter();

  const [rating, setRating] = useState<number>(reviewItem.rating);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>(reviewItem.review);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formattedDate = new Date(reviewItem.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const avatarLetter = reviewItem.user?.name
    ? reviewItem.user.name.charAt(0).toUpperCase()
    : "U";

  async function handleUpdateReview() {
    if (!reviewText.trim()) {
      toast.warning("Please write a review text");
      return;
    }

    setIsLoading(true);

    const resp = await dynamicApiAction(
      `https://ecommerce.routemisr.com/api/v1/reviews/${reviewItem._id}
      `,
      { review: reviewText, rating: rating }, 
      "PUT", 
      undefined
    );

    const errorMsg =
      typeof resp.error === "object"
        ? (resp.error as any)?.errors?.msg || "Failed To Update Your Review"
        : resp.error || "Failed To Update Your Review";

    if (resp.success) {
      toast.success("Your Review Is Updated Successfully!");
      if (onSuccess) onSuccess();
      onCancel(); 
      router.refresh(); 
    } else {
      toast.error(errorMsg);
    }

    setIsLoading(false);
  }

  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-main-color/30 bg-white space-y-4 shadow-[0_0_15px_rgba(22,163,74,0.1)] transition-all duration-200">
      
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex justify-center items-center rounded-full bg-main-color-subtle text-main-color font-bold text-sm sm:text-base">
            {avatarLetter}
          </div>

          <div className="min-w-0 space-y-1">
            <h5 className="font-bold text-xs sm:text-sm text-gray-900 capitalize truncate">
              {reviewItem.user?.name || "User"}
            </h5>

            <div className="flex items-center gap-1">
              <div className="flex gap-1 cursor-pointer">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      className={`w-4 h-4 sm:w-4 sm:h-4 transition-colors ${
                        starValue <= (hoverRating || rating)
                          ? "text-amber-400 scale-110"
                          : "text-gray-200"
                      }`}
                    />
                  );
                })}
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-gray-700 ml-1">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center shrink-0 pt-0.5">
          <span className="text-[10px] sm:text-xs font-medium text-gray-400">
            {formattedDate}
          </span>
        </div>
      </div>

      <div>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows={3}
          disabled={isLoading}
          className="w-full p-3 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-main-color focus:ring-1 focus:ring-main-color transition-all resize-none disabled:opacity-50"
          placeholder="Update your review..."
        />
      </div>

      <div className="flex items-center justify-end gap-2 pt-1">
        <Button
          onClick={onCancel}
          disabled={isLoading}
          variant="outline"
          className="h-8 px-4 text-xs font-semibold text-gray-600 bg-white border-gray-200 hover:bg-gray-50 rounded-lg cursor-pointer"
        >
          Cancel
        </Button>
        
        <Button
          onClick={handleUpdateReview}
          disabled={isLoading}
          className="h-8 px-4 text-xs font-semibold text-white bg-main-color hover:bg-green-700 rounded-lg cursor-pointer"
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </div>
      
    </div>
  );
}