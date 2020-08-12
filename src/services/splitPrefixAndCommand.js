const splitPrefixAndCommand = (messageContent = '') => {
  const message = messageContent.trim().split(' ')

  return [message[0] || '', message[1] || '']
}

module.exports = splitPrefixAndCommand
