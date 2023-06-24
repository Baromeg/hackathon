import { useEffect, useState } from 'react'
import Image from 'next/image'
import hackathon from './hackathon.png'

interface Message {
  user: string
  message: string
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const sendMessage = () => {
    setMessages([...messages, { user: 'User', message: input }])
    setInput('')
  }

  return mounted ? (
    <div>
      <div>
        <Image src={hackathon} alt='hackathon' height={100} width={100} />
        {messages.map((message, index) => (
          <p key={index}>
            <strong>{message.user}: </strong>
            {message.message}
          </p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  ) : null
}

export default Chat
