// Ova funkcija automatski prepoznaje da li si na lokalu ili na GitHub-u
const basePath =
  process.env.NODE_ENV === 'production' ? '/personal-portfolio' : ''

export const getAssetPath = (path: string) => {
  // Ako putanja već počinje sa http ili je već sređena, ne diraj je
  if (path.startsWith('http') || path.startsWith('blob')) return path
  // Osiguraj se da putanja počinje sa kosom crtom
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}
