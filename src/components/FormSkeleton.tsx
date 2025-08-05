import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// This component provides a skeleton loading state for the form
// It is used to show a placeholder while the actual form data is being loaded
// The skeleton mimics the structure of the form, including fields for cardholder name, card number, date, CVC, and a submit button.

const FormSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e2e5e7" highlightColor="#f5f5f5">
      <main>
        <div className="form">
          {/* Cardholder Name */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Skeleton
              height={16}
              width={120}
              style={{ marginBottom: "0.5rem" }}
            />
            <Skeleton height={45} borderRadius={8} />
          </div>

          {/* Card Number */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Skeleton
              height={16}
              width={140}
              style={{ marginBottom: "0.5rem" }}
            />
            <Skeleton height={45} borderRadius={8} />
          </div>

          {/* Date and CVC Row */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ flex: 1 }}>
              <Skeleton
                height={16}
                width={100}
                style={{ marginBottom: "0.5rem" }}
              />
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Skeleton height={45} width={80} borderRadius={8} />
                <Skeleton height={45} width={80} borderRadius={8} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <Skeleton
                height={16}
                width={60}
                style={{ marginBottom: "0.5rem" }}
              />
              <Skeleton height={45} borderRadius={8} />
            </div>
          </div>

          {/* Submit Button */}
          <Skeleton height={50} borderRadius={8} />
        </div>
      </main>
    </SkeletonTheme>
  );
};

export default FormSkeleton;
