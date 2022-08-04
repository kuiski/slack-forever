const head = <Data>(data?: Data | Data[]): Data | null => {
  if (!data) return null
  if (Array.isArray(data)) {
    return data.length > 0 ? data[0] : null
  }

  return data
}

export default head
