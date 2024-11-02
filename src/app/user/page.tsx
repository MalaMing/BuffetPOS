'use client';

import ScreenMobile from "@/components/ScreenMobile";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(searchParams.get('accessKey'))
  }, [searchParams])

  return (
    <ScreenMobile>
      {searchParams.get('accessKey')}
    </ScreenMobile>
  );
}