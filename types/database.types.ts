export interface Database {
  public: {
    Tables: {
      MESSAGES: {
        Row: {
          id: string
          created_at: string | null
          sender_name: string | null
          sender_email: string | null
          sender_message: string | null
          replied_to: boolean | null
        }
        Insert: {
          sender_name: string | null
          sender_email: string | null
          sender_message: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          sender_name: string | null
          sender_email: string | null
          sender_message: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
