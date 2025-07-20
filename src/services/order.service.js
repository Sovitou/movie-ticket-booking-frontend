// API calls for orders
const BASE_URL = "http://localhost:3000/api";

const orderService = {
  // Get user orders
  getUserOrders: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Get orders error:", error);
      throw error;
    }
  },

  // Get order by ID
  getOrderById: async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Get order error:", error);
      throw error;
    }
  },

  // Create new order/booking
  createOrder: async (orderData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });
      return await response.json();
    } catch (error) {
      console.error("Create order error:", error);
      throw error;
    }
  },

  // Cancel order
  cancelOrder: async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/orders/${id}/cancel`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Cancel order error:", error);
      throw error;
    }
  },

  // Get all orders (Admin only)
  getAllOrders: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/admin/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Get all orders error:", error);
      throw error;
    }
  },

  // Process payment
  processPayment: async (paymentData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/orders/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(paymentData),
      });
      return await response.json();
    } catch (error) {
      console.error("Process payment error:", error);
      throw error;
    }
  },
};

export default orderService;
