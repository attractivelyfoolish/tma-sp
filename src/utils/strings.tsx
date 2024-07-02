export const truncateWithEllipses = (
  str?: string,
  keepStart = 6,
  keepEnd = 4
) => {
  return str?.replace?.(
    new RegExp(`(.{${keepStart}}).+(.{${keepEnd}})`, 'g'),
    '$1...$2'
  )
}
