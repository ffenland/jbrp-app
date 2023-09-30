import { links } from "@/libs/displayData";
import { AspectRatio, Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const initialState = {
  viewportWidth: typeof window !== "undefined" ? window.innerWidth : 0,
  viewportHeight: typeof window !== "undefined" ? window.innerHeight : 0,
};
const Display = () => {
  const isBrowser = typeof window !== "undefined";
  const [viewportWidth, setViewportWidth] = useState(
    initialState.viewportWidth
  );
  const [viewportHeight, setViewportHeight] = useState(
    initialState.viewportHeight
  );

  // 뷰포트 크기가 변경될 때마다 상태 업데이트
  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
        setViewportHeight(window.innerHeight);
      };

      // 이벤트 리스너 등록
      window.addEventListener("resize", handleResize);

      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isBrowser]);
  console.log(viewportWidth);
  console.log(viewportHeight);

  return (
    <Box>
      <AspectRatio maxW="full" ratio={1}>
        <iframe title="main" src={"/videos/intro.mp4"} allowFullScreen />
      </AspectRatio>
    </Box>
  );
};

export default Display;
