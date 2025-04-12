export default function Star({ type = "full", w = "18", h = "17", index }) {
  if (type === "half") {
    const gradientId = `half-gradient-${index}`; // unique ID for each instance
    return (
      <svg width={w} height={h} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="50%" stopColor="#FFA800" />
            <stop offset="50%" stopColor="#E0E0E0" />
          </linearGradient>
        </defs>
        <path
          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    );
  }

  const fillColor = type === "full" ? "#FFA800" : "#E0E0E0";

  return (
    <svg width={w} height={h} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
        fill={fillColor}
      />
    </svg>
  );
}
