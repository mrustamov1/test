import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export function CardSkeleton({ type = "case" }: { type?: "case" | "product" }) {
  if (type === "case") {
    return (
      <div style={{ width: 350, height: 200 }}>
        <Skeleton height={130} width="100%" borderRadius={8} />
        <div style={{ padding: "0.5rem 0.75rem" }}>
          <Skeleton height={15} width="70%" />
          <div style={{ marginTop: 8 }}>
            <Skeleton height={10} width="40%" />
          </div>
        </div>
      </div>
    )
  } else if (type === "product") {
    return (
      <div style={{ width: "100%", maxHeight: 400 }}>
        <Skeleton height={300} width="100%" borderRadius={8} />
        <div style={{ padding: "0.75rem 1rem" }}>
          <Skeleton width="70%" height={15} />
          <div style={{ marginTop: 8 }}>
            <Skeleton width="40%" height={10} />
          </div>
        </div>
      </div>
    )
  }
}
