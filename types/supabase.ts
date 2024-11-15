export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      FT_EXERCISES: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          soft_delete: boolean | null;
          user_id: string | null;
          weight: number | null;
          workout: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name?: string;
          soft_delete?: boolean | null;
          user_id?: string | null;
          weight?: number | null;
          workout?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          soft_delete?: boolean | null;
          user_id?: string | null;
          weight?: number | null;
          workout?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "FT_EXERCISES_workout_fkey";
            columns: ["workout"];
            isOneToOne: false;
            referencedRelation: "FT_WORKOUTS";
            referencedColumns: ["id"];
          }
        ];
      };
      FT_SETS: {
        Row: {
          created_at: string;
          exercise: string | null;
          id: string;
          reps: number | null;
          soft_delete: boolean | null;
          user_id: string | null;
          weight: number | null;
          unit: string;
        };
        Insert: {
          created_at?: string;
          exercise?: string | null;
          id?: string;
          reps?: number | null;
          soft_delete?: boolean | null;
          user_id?: string | null;
          weight?: number | null;
          unit?: string | null;
        };
        Update: {
          created_at?: string;
          exercise?: string | null;
          id?: string;
          reps?: number | null;
          soft_delete?: boolean | null;
          user_id?: string | null;
          weight?: number | null;
          unit?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "FT_SETS_exercise_fkey";
            columns: ["exercise"];
            isOneToOne: false;
            referencedRelation: "FT_EXERCISES";
            referencedColumns: ["id"];
          }
        ];
      };
      FT_WORKOUT_TYPES: {
        Row: {
          created_at: string;
          id: string;
          name: string | null;
          soft_delete: boolean | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name?: string | null;
          soft_delete?: boolean | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string | null;
          soft_delete?: boolean | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      FT_WORKOUTS: {
        Row: {
          created_at: string;
          end_time: string | null;
          id: string;
          soft_delete: boolean;
          start_time: string;
          type: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          end_time?: string | null;
          id?: string;
          soft_delete?: boolean;
          start_time?: string;
          type?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          end_time?: string | null;
          id?: string;
          soft_delete?: boolean;
          start_time?: string;
          type?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "ft_workouts_type_fkey";
            columns: ["type"];
            isOneToOne: false;
            referencedRelation: "FT_WORKOUT_TYPES";
            referencedColumns: ["id"];
          }
        ];
      };
      MESSAGES: {
        Row: {
          created_at: string;
          id: string;
          replied_to: boolean | null;
          sender_email: string | null;
          sender_message: string | null;
          sender_name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          replied_to?: boolean | null;
          sender_email?: string | null;
          sender_message?: string | null;
          sender_name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          replied_to?: boolean | null;
          sender_email?: string | null;
          sender_message?: string | null;
          sender_name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
