export const {
  NODE_ENV = 'development',
  APP_PORT = 3500,
} = process.env

export const IN_PROD = NODE_ENV === 'production'
