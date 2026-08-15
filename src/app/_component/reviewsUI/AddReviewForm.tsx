"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar, FaSpinner } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { dynamicApiAction } from "@/api/actions/routea.ctions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AddReviewForm({
  numOfReviews,
  productId,
}: {
  numOfReviews: number;
  productId: string;
}) {
  const [isWritingReview, setisWritingReview] = useState(false);
  const [starOrder, setStarOrder] = useState<number>(-1);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const [reviewText, setReviewText] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit() {
    
    setErrorMsg("");

    if (selectedRating < 1 || selectedRating > 5) {
      setErrorMsg("Rating min value 1.0 and max 5.0");
      return;
    }

    if (reviewText.trim() === "") {
      setErrorMsg("Review required");
      return;
    }
    setIsLoading(true)
    const reviewBody = {
      review: reviewText.trim(),
      rating: selectedRating,
    };

    console.log("reviewBody : ", reviewBody);
    const resp = await dynamicApiAction(
      `https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews`,
      reviewBody,
      "POST",
      undefined,
      true,
    );
    setIsLoading(false)
    if (resp.success) {
      setSelectedRating(0);
      setStarOrder(-1);
      setReviewText("");
      toast.success("Review Is Created Successfully!");
      router.refresh();
    } else {
      const errorMessage =
        typeof resp.error === "object"
          ? (resp.error )?.errors?.msg || "Failed to update profile"
          : resp.error || "Failed to update profile";
      setErrorMsg(errorMessage || "Failed To Add Review!");
    }
  }
  return (
    <>
      {numOfReviews === 0 && !isWritingReview && (
        <div className="border-t border-gray-200 pt-6">
          <div className="text-center py-8">
            <FaStar className="text-4xl text-gray-300 mb-3 mx-auto" />
            <p className="text-gray-500 font-medium">
              Customer reviews will be displayed here.
            </p>
            <Button
              onClick={() => {
                setisWritingReview(true);
              }}
              className="mt-4 text-main-color hover:text-main-color-hover font-medium"
            >
              Write a Review
            </Button>
          </div>
        </div>
      )}

      {(numOfReviews !== 0 || isWritingReview) && (
        <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#F3F4F6] space-y-5 shadow-sm">
          <h4 className="font-bold text-[#101828] text-lg">Leave a Review</h4>

          {errorMsg && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl font-medium">
              {errorMsg}
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-text-color">
              Your Rating:
            </span>
            <div
              onMouseLeave={() => setStarOrder(selectedRating - 1)}
              className="flex items-center gap-1 cursor-pointer"
            >
              {Array.from({ length: 5 }).map((_, idx) => {
                const isBlured = idx <= starOrder;
                return isBlured ? (
                  <FaStar
                    onMouseEnter={() => {
                      setStarOrder(idx);
                    }}
                    onClick={() => {
                      setSelectedRating(idx + 1);
                    }}
                    key={idx}
                    className="w-6 h-6 text-yellow-400 cursor-pointer"
                  />
                ) : (
                  <FaRegStar
                    onMouseEnter={() => {
                      setStarOrder(idx);
                    }}
                    onClick={() => {
                      setSelectedRating(idx + 1);
                    }}
                    key={idx}
                    className="w-6 h-6 text-gray-300 hover:text-yellow-400 transition-colors"
                  />
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="reviewText"
              className="text-sm font-medium text-[#101828]"
            >
              Your Review
            </label>
            <textarea
              onChange={(e) => {
                e.preventDefault();
                setReviewText(e.target.value);
              }}
              value={reviewText}
              id="reviewText"
              rows={4}
              placeholder="What did you like or dislike? How was the quality?"
              className="w-full p-4 rounded-xl border border-[#F3F4F6] bg-white focus:outline-none focus:ring-2 focus:ring-main-color/50 focus:border-main-color transition-all resize-none text-sm text-text-color shadow-sm"
            ></textarea>
          </div>

          <div className="pt-2">
            <Button
              onClick={handleSubmit}
              className="h-auto rounded-xl py-3 px-6 bg-main-color hover:bg-main-color-hover text-white font-semibold shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] transition-colors duration-100"
            >
                {isLoading
                ?<> <FaSpinner className="animate-spin"/> Adding... </>
                : 'Add Review'
                }
              
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
