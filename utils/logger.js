function logger (fn, name = 'анонимная') {
  return async function (...params) {
    console.log(`start call ${name})
    const response = await fn(...params)
    console.log(`finish call` ${name})  
    return response
  }
}


