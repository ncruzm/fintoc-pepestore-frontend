

export class API {

  static async api(path: string, init?: RequestInit & { skipContentType?: boolean }) {

    try {
      
      const { skipContentType, ...restInit } = init || {}

      const headers = {
        ...(!skipContentType && { "Content-Type": "application/json" }),
        ...restInit?.headers
      }

      const url = `${process.env.NEXT_PUBLIC_API_URL}${path.startsWith("/") ? path : `/${path}`}`

      console.log("API Request:", url)

      const response = await fetch(url, {
        cache: "no-store",
        credentials: "include",
        ...restInit,
        headers
      })

      if (!response.ok) {
        const errorText = await response.text().catch(() => "Unknown error")
        const error = new Error(`API Error ${response.status}: ${errorText}`)
        throw error
      }

      return response

    } catch (error) {
      // Sentry.captureException(error)
      throw error
    }
  }

  static async submitHelpRequest(token, data: { name: string; email: string; subject: string; message: string }) {
    try {
      const res = await this.api("/help", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
      return res.json()
    }
    catch (error) {
      console.error("Error submitting help request:", error)
      throw error
    }
  }

  static async getProducts() {
    try {
      const res = await this.api("/products", {
        method: "GET"
      })
      return res.json()
    }
    catch (error) {
      console.error("Error fetching products:", error)
      throw error
    }
  }


  static async addProductToCart(productId: string, quantity: number) {
    try {
      const res = await this.api("/cartItems", {
        method: "POST",
        body: JSON.stringify({ productId, quantity }),
      })
      return res.json()
    }
    catch (error) {
      console.error("Error adding product to cart:", error)
      throw error
    }
  }

  static async getCartItems() {
    try {
      const res = await this.api("/cartItems", {
        method: "GET",
      })
      return res.json()
    }
    catch (error) {
      console.error("Error fetching cart items:", error)
      throw error
    }
  }
}