export class EMPTY {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

export class SIZE_EXCEEDED {
  message: string;
  limit: number;

  constructor(message: string, limit: number) {
    this.message = message;
    this.limit = limit;
  }
}

export type ContactMeFormError = EMPTY | SIZE_EXCEEDED;

type ContactMeFormErrors = {
  name?: ContactMeFormError;
  contact?: ContactMeFormError;
  message?: ContactMeFormError;
};

export default ContactMeFormErrors;
