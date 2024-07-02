export const truncateWithEllipses = (str, keepStart = 4, keepEnd = 2) => {
  return str?.replace?.(new RegExp(`(.{${keepStart}}).+(.{${keepEnd}})`, 'g'), '$1...$2')
}
