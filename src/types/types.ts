export interface Product {
    product_id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    number_of_ratings?: number | null;
    number_of_sale?: number | null;
    ratings: number;
    created_at?: string;
    updated_at?: string;
}
export interface CartProduct {
    id:number,
    user_id:number,
    product_id: number;
    count:number;
    created_at?: string;
    updated_at?: string;
product:Product;
   
}

export interface CardProps {
    product: Product;
    onClick: () => void;
    className?: string;
  }


  export interface LoginData{
    email:string,
    password:string;
  }

  interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Review {
    review_id: number;
    user_id: number;
    product_id: number;
    user_review: string;
    rating: number;
    created_at: string;
    updated_at: string;
    user: User;
}
