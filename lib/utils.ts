import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";
import { aspectRatioOptions } from "@/constants";

// CLASS MERGER
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// PLACEHOLDER LOADER - while image is transforming
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(
  shimmer(1000, 1000)
)}`;

// FORM URL QUERY TYPES
interface FormUrlQueryParams {
  searchParams: URLSearchParams;
  key: string;
  value: string;
}

interface RemoveUrlQueryParams {
  searchParams: URLSearchParams;
  keysToRemove: string[];
}

// URL QUERY FUNCTIONS
export const formUrlQuery = ({
  searchParams,
  key,
  value,
}: FormUrlQueryParams): string => {
  const params = { ...qs.parse(searchParams.toString()), [key]: value };

  return `${window.location.pathname}?${qs.stringify(params, {
    skipNulls: true,
  })}`;
};

export const removeKeysFromQuery = ({
  searchParams,
  keysToRemove,
}: RemoveUrlQueryParams): string => {
  const currentUrl = qs.parse(searchParams.toString());

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  Object.keys(currentUrl).forEach(
    (key) => currentUrl[key] == null && delete currentUrl[key]
  );

  return `${window.location.pathname}?${qs.stringify(currentUrl)}`;
};

// DEBOUNCE FUNCTION
export const debounce = <T extends (...args: never[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// IMAGE SIZE TYPES AND FUNCTIONS
export type AspectRatioKey = keyof typeof aspectRatioOptions;

interface ImageDimensions {
  width?: number;
  height?: number;
  aspectRatio?: AspectRatioKey;
}

export const getImageSize = (
  type: string,
  image: ImageDimensions,
  dimension: "width" | "height"
): number => {
  if (type === "fill") {
    return aspectRatioOptions[image.aspectRatio as AspectRatioKey]?.[dimension] || 1000;
  }
  return image?.[dimension] || 1000;
};

// DOWNLOAD FUNCTION
export const download = (url: string, filename: string): void => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one");
  }

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;

      if (filename && filename.length) {
        a.download = `${filename.replace(" ", "_")}.png`;
      }
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobURL);
    })
    .catch((error) => {
      console.error("Download error:", error);
    });
};

// DEEP MERGE OBJECTS
interface DeepObject {
  [key: string]: DeepObject | unknown;
}

export const deepMergeObjects = (
  obj1: DeepObject,
  obj2: DeepObject
): DeepObject => {
  if (!obj2) {
    return obj1;
  }

  const output = { ...obj2 };

  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      if (
        obj1[key] &&
        typeof obj1[key] === "object" &&
        obj2[key] &&
        typeof obj2[key] === "object"
      ) {
        output[key] = deepMergeObjects(
          obj1[key] as DeepObject,
          obj2[key] as DeepObject
        );
      } else {
        output[key] = obj1[key];
      }
    }
  }

  return output;
};