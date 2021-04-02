import { initSDK } from './AdminSDK';

import * as SendMessage from './contact_me/send_message';

initSDK();

export const sendMessage = SendMessage.call;
