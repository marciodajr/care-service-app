import { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';

import {
  ButtonBase,
  ButtonLabel,
  Input,
  KeyboardAvoidingView,
  Message,
  ScrollView,
  TypeArea
} from "./styles"

const socket = io('https://api.twk.global', { transports: ['websocket'] });

interface IMessages {
  message: string;
}

export const ChatScreen = () => {
  const scrollViewRef = useRef<any>();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessages[]>([]);

  const handleSubmitNewMessage = () => {
    setMessage('');
    socket.emit('send_message', { data: message });
  }

  const handleLoadMessage = (data: string) => {
    setMessages(prev => [...prev, { message: data }]);
  }

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('request_all_messages');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('all_messages', (data) => {
      setMessages(data);
    });

    socket.on('receive_message', ({ message }) => {
      handleLoadMessage(message)
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('receive_message');
      socket.off('send_all_messages');
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      keyboardVerticalOffset={100}
    >
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}
      >
        {messages.map((item, key) => <Message key={key}>{item.message}</Message>)}
      </ScrollView>
      <TypeArea>
        <Input value={message} onChangeText={setMessage} />
        <ButtonBase onPress={() => handleSubmitNewMessage()}>
          <ButtonLabel>Send</ButtonLabel>
        </ButtonBase>
      </TypeArea>
    </KeyboardAvoidingView>
  );
}