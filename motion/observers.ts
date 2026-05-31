type ObserveOptions = {
  rootMargin?: string;
  threshold?: number;
};

export const observeOnce = (
  element: Element,
  onEnter: () => void,
  options: ObserveOptions = {},
) => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    onEnter();
    return () => undefined;
  }

  let entered = false;
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (!entry?.isIntersecting || entered) {
        return;
      }

      entered = true;
      onEnter();
      observer.disconnect();
    },
    {
      rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
      threshold: options.threshold ?? 0.18,
    },
  );

  observer.observe(element);

  return () => observer.disconnect();
};
