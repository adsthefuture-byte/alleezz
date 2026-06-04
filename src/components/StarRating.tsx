import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

const StarRating = ({ rating, reviewCount, size = "sm" }: StarRatingProps) => {
  const starSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";

  return (
    <div className="flex items-center gap-1 justify-end">
      {reviewCount !== undefined && (
        <span className="text-[10px] text-muted-foreground">({reviewCount})</span>
      )}
      <div className="flex gap-0.5" dir="ltr">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`${starSize} ${
              i <= Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : i - 0.5 <= rating
                ? "fill-yellow-400/50 text-yellow-400"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
