import { useEffect, useState } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}




