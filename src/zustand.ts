import { create } from 'zustand'

interface ConnectionIP {
    connectionIP: string
}
export const useConnectionIP = create<ConnectionIP>((set) => ({
    connectionIP: ''
}))