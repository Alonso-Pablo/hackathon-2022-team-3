export const getUniqueElements = <T>(array: T[], by: string): T[] => {
  let keys: any = {}
  return array.filter((item) => {
    if (keys[by]) {
      return false
    }
    keys[by] = true
    return true
  })
}