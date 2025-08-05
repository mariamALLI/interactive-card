import Skeleton from "react-loading-skeleton";

interface FormFieldSkeletonProps {
  showLabel?: boolean;
  showInput?: boolean;
  labelWidth?: number;
  inputHeight?: number;
}

export const FormFieldSkeleton = ({
  showLabel = true,
  showInput = true,
  labelWidth = 120,
  inputHeight = 45,
}: FormFieldSkeletonProps) => (
  <div style={{ marginBottom: "1.5rem" }}>
    {showLabel && (
      <Skeleton
        height={16}
        width={labelWidth}
        style={{ marginBottom: "0.5rem" }}
      />
    )}
    {showInput && <Skeleton height={inputHeight} borderRadius={8} />}
  </div>
);

interface CardFieldSkeletonProps {
  width?: string | number;
  height?: number;
}

export const CardFieldSkeleton = ({
  width = "100%",
  height = 20,
}: CardFieldSkeletonProps) => <Skeleton width={width} height={height} />;

interface ButtonSkeletonProps {
  height?: number;
  width?: string | number;
}

export const ButtonSkeleton = ({
  height = 50,
  width = "100%",
}: ButtonSkeletonProps) => (
  <Skeleton height={height} width={width} borderRadius={8} />
);

// Loading overlay for existing components
interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton: React.ReactNode;
}

export const LoadingOverlay = ({
  isLoading,
  children,
  skeleton,
}: LoadingOverlayProps) => {
  return isLoading ? <>{skeleton}</> : <>{children}</>;
};
