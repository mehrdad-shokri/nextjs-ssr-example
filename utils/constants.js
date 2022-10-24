const isDev = process.env.NODE_ENV !== 'production';

export const ENDPOINT = isDev ? 'http://localhost:3000':'http://localhost:3000';