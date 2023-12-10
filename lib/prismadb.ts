import { PrismaClient } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const client = global.prismadb || new PrismaClient()

if (process.env.NODE_ENV === 'production') global.prismadb = client

export default client
