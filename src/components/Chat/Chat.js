import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import BadgeLine from './BadgeLine/BadgeLine'
import './Chat.scss'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageInput from './MessageInput/MessageInput'
import MessageItems from './MessageItems/MessageItems'

const Chat = ({ selectedChat }) => {
	const [messages, setMessages] = useState([])

	const chatKey = selectedChat ? `chat_${selectedChat.id}` : null

	useEffect(() => {
		if (!chatKey) return
		try {
			const savedMessages = localStorage.getItem(chatKey)
			const parsedMessages = savedMessages ? JSON.parse(savedMessages) : []
			console.log('Loaded from localStorage:', parsedMessages)
			setMessages(parsedMessages)
		} catch (error) {
			console.error('Error loading messages:', error)
			setMessages([])
		}
	}, [chatKey])

	useEffect(() => {
		if (!chatKey || messages.length === 0) return
		console.log('Saving messages:', messages)
		localStorage.setItem(chatKey, JSON.stringify(messages))
	}, [messages, chatKey])

	// ✅ Функция редактирования сообщений (Теперь сохраняет в localStorage)
	const handleEditMessage = (id, newText) => {
		setMessages(prevMessages => {
			const updatedMessages = prevMessages.map(msg =>
				msg.id === id ? { ...msg, message: newText } : msg
			)
			console.log('Saving to localStorage:', updatedMessages)
			localStorage.setItem(chatKey, JSON.stringify(updatedMessages)) // Сохранение после редактирования
			return updatedMessages
		})
	}

	const handleSendMessage = newMessage => {
		setMessages(prevMessages => {
			const updatedMessages = [
				...prevMessages,
				{ ...newMessage, id: Date.now() }, // ✅ Присваиваем уникальный id
			]
			console.log('New messages:', updatedMessages)
			localStorage.setItem(chatKey, JSON.stringify(updatedMessages))
			return updatedMessages
		})
	}

	if (!selectedChat) {
		return (
			<div className='chat-placeholder'>
				<p>Select a message to view the chat</p>
			</div>
		)
	}

	return (
		<div className='chat'>
			<MessageHeader selectedChat={selectedChat} />
			<BadgeLine text='Today' />
			<Scrollbars
				className='chat'
				style={{ height: 'calc(100vh - 380px)' }}
				renderThumbVertical={props => (
					<div {...props} className='thumb-vertical' />
				)}
			>
				<div className='chat__messages'>
					{messages.length === 0 ? (
						<div className='empty-container'>
							<div className='empty-chat'>
								<img
									src='/no-messages.png'
									alt='No messages'
									className='empty-chat__image'
								/>
								<p className='empty-chat__text'>No messages here yet...</p>
								<p className='empty-chat__subtext'>
									Send a message or click on the greeting below
								</p>
							</div>
						</div>
					) : (
						messages.map((message, index) => (
							<MessageItems
								key={message.id || index} // ✅ Используем index, если message.id не существует
								id={message.id || index} // ✅ Гарантируем, что id всегда будет уникальным
								avatar={message.avatar}
								name={message.name}
								time={message.time}
								message={message.message}
								type={message.type}
								image={message.image}
								onEditMessage={handleEditMessage} // ✅ Передаём функцию редактирования
							/>
						))
					)}
				</div>
			</Scrollbars>
			<MessageInput onSendMessage={handleSendMessage} />
		</div>
	)
}

export default Chat
