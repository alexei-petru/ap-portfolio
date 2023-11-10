import { MutableRefObject, ComponentType, useState, useEffect } from "react";

export const useIntersectionDynamicLoad = (
  targetRef: MutableRefObject<null>,
  componentToLoad: ComponentType,
  intersectionThreshold = 0.1,
  timeoutMs = 4000
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let timeoutId: NodeJS.Timeout;
    let didCancel = false;

    function loadComponent() {
      if (!didCancel) {
        setIsVisible(true);
        if (observer) {
          observer.disconnect();
        }
      }
    }

    if (targetRef.current && !isVisible) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            loadComponent();
          }
        },
        { threshold: intersectionThreshold }
      );

      observer.observe(targetRef.current);
    }

    // eslint-disable-next-line prefer-const
    timeoutId = setTimeout(loadComponent, timeoutMs);

    return () => {
      didCancel = true;
      if (observer) {
        observer.disconnect();
      }
      clearTimeout(timeoutId);
    };
  }, [targetRef, componentToLoad, isVisible, intersectionThreshold, timeoutMs]);

  return isVisible;
};
