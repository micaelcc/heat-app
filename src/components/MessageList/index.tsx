import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
  const message = {
    id: 'teste',
    text: 'mensagem texto',
    user: {
      name: 'Micael',
      avatar_url: 'https://github.com/micaelcc.png'
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
    </ScrollView>
  )
}