import React from "react";
import ReviewCard from "./ReviewCard";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { productReviewType } from "@/api/types";
import { dynamicApiService } from "@/api/services/route.services";
import AddReviewForm from "./AddReviewForm";
import AppPagination from "./AppPagination";
import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/nextAuth/nextAuth.config";

type reviewsWithMetaDataType = {
  results: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: productReviewType[];
};

export default async function ReviewsContainer({
  productId,
  searchParams,
}: {
  productId: string;
  searchParams: Promise<{ page: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams?.page) || 1;
  console.log("currentPage : ", currentPage);

  const session = await getServerSession(nextAuthConfig);
  const currentUserId = session?.user?.id;

  console.log('currentUserId : ' , currentUserId);
  

  const resp = (
    await dynamicApiService<reviewsWithMetaDataType>(
      `https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews?limit=12&page=${currentPage}`,
      true,
      true,
      ["getReviews", String(currentPage), productId],
    )
  )?.data;
  const reviewsList = resp?.data;
  const totalPages = resp?.metadata.numberOfPages;

  // console.log('reviewsList : ' , reviewsList);
  // const handlePageChange = (newPage: number) => {};

  return (
    <div className="space-y-4">
      <AddReviewForm
        productId={productId}
        numOfReviews={reviewsList?.length || 0}
      />
      {reviewsList?.map((review) => {
        const isMyReview = review.user._id === currentUserId
        return( <ReviewCard key={review._id} reviewItem={review} isMyReview={isMyReview} />)
       
      })}
      <AppPagination
        currentPage={currentPage}
        totalPages={totalPages as number}
      />
    </div>
  );
}
