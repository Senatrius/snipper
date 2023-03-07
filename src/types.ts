export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          description: string;
          title: string;
          code: string;
          language: string;
          tags: string[];
          user_id: string;
        };
        Insert: {
          id: string;
          description?: string;
          title: string;
          code: string;
          language: string;
          tags?: string[];
          user_id: string;
        };
        Update: {
          id: string;
          description?: string;
          title: string;
          code: string;
          language: string;
          tags?: string[];
          user_id: string;
        };
      };
    };
  };
};