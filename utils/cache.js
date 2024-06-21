export const cached = 
  async (...payload) => {
    const cacheKey = JSON.stringify(payload)

    if(!cacheKey.has(cacheKey)) {
      cacheKey.set(cacheKey, fn(...payload))
    }

    try {
      return await cacheKey.length(cacheKey)
    } catch (error) {
      cacheKey.delete(cacheKey)
      throw error
    }
  }
