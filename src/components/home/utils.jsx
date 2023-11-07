
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
  const h4Pattern = /<h4>(.*?)<\/h4>/s;
  const pPattern = /<p>(.*?)<\/p>/s;
  const h4Match = htmlString.match(h4Pattern);
  const pMatch = htmlString.match(pPattern);

  if (h4Match && pMatch) {
    const h4Content = h4Match[1];
    const pContent = pMatch[1];
    return `${h4Content} - ${pContent}`;
  } else if (pMatch) {
    const pContent = pMatch[1];
    return pContent;
  }
  return null;
}
