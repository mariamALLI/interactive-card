import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// This component provides a skeleton loading state for the card display
// It is used to show a placeholder while the actual card data is being loaded
// The skeleton mimics the structure of the card, including both front and back views.

const CardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e2e5e7" highlightColor="#f5f5f5">
      <header>
        <div className="container" role="banner">
          <div className="backcard">
            <Skeleton
              height={180}
              borderRadius={12}
              style={{ width: "78vw", maxWidth: "400px" }}
            />
          </div>

          <div className="frontcard" style={{ marginTop: "2rem" }}>
            <Skeleton
              height={180}
              borderRadius={12}
              style={{ width: "78vw", maxWidth: "400px" }}
            />
          </div>
        </div>
      </header>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
