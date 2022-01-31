import { useCallback, useLayoutEffect, useMemo, useState } from "react";

function useGetIsMobile(): boolean | null {
  const [device, setDevice] = useState<string | null>(null);
  const [isFirst, setIsFirst] = useState(false);

  const checkDevice = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 768) {
      setDevice("Mobile");
    } else {
      setDevice("Desktop");
    }
  }, []);

  const onResize = (e: Event) => {
    checkDevice();
  };

  useLayoutEffect(() => {
    if (isFirst) {
      setIsFirst(false);
    }
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isMobile = useMemo(() => {
    if (isFirst) {
      return window.innerWidth > 768 ? true : false;
    }
    return device === "Mobile" ? true : false;
  }, [device]);

  return isMobile;
}

export default useGetIsMobile;
