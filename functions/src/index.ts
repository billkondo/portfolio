import { initSDK } from './AdminSDK';

import * as OnMessageSended from './contact_me/on_message_sended';
import * as SendMessage from './contact_me/send_message';

initSDK();

export const onMessageSended = OnMessageSended.listener;
export const sendMessage = SendMessage.call;
