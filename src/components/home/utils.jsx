
export function formatDate(inputText) {
  const inputDate = new Date(inputText);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return inputDate.toLocaleDateString(undefined, options);
}

export function extractContent(htmlString) {
  // Create a new DOMParser
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Try to select h4 and p elements
  const h4Element = doc.querySelector("h4");
  const pElement = doc.querySelector("p");

  // Initialize content variables
  let h4Content = "";
  let pContent = "";

  // Extract content if elements exist
  if (h4Element) {
    h4Content = h4Element.textContent.trim();
  }

  if (pElement) {
    pContent = pElement.textContent.trim();
  }

  // Construct the final content
  if (h4Content && pContent) {
    return `${h4Content} - ${pContent}`;
  } else if (pContent) {
    return pContent;
  }

  return null;
}

