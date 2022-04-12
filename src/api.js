import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_API_URL || "http://localhost"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, fields = [], filters=[],  options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const fieldsQuery = `fields=${fields.join()}`;
  const filtersQuery = filters.length ? filters.map(i => "filter" + i).join("&") : "";
  const requestUrl = `${getURL(
    `/items${path}${fields.length ? `?${[fieldsQuery,filtersQuery].join("&")}` : ""}`
  )}`;
  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again on ${requestUrl}`);
  }
  const data = await response.json();
  return data;
}