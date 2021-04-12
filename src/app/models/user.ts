import { Planning } from './planning'

export class User {
    id: number
    name: string
    email: string
    plannings?: Planning[]
}
