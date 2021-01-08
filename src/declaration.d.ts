interface Req {
  action: string,
  [key: string]: unknown,
}

interface SendsayInstance {
  session: string,
  login: (credentions: { login: string, sublogin?: string, password: string }) => Promise<void>
  setSession: (session: string) => void
  request: <T extends unknown>(req: Req) => Promise<T>
}

declare module 'sendsay-api' {
  interface SendsayConstructor {
    new (): SendsayInstance
  }

  declare const $: SendsayConstructor;
  export default $;
}
