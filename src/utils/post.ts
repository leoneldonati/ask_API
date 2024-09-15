export function checkLinksOnContent (content: string) {
  const pattern = /((https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?/gi;

  const match = content?.match(pattern);

  return match ? match : null
}

export function checkUsersMentioned (content: string) {
  const mentionPattern = /@([a-zA-Z0-9_]+)/g;

  const match = content?.match(mentionPattern)

  return match ? match : null
}