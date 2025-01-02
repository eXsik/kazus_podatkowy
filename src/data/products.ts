export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/products.json');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return await response.json();
  } catch (error) {
    console.error('Błąd podczas ładowania produktów:', error);
    throw error;
  }
}
