const handleError = errorMessage => {
  const date = new Date()
  const erroDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`

  console.error(erroDate, ': ', errorMessage)
}

module.exports = handleError
