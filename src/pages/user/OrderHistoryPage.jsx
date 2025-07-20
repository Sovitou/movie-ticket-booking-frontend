// OrderHistoryPage component - displays user's booking history
import React from "react";
import UserLayout from "../../components/layout/UserLayout";

const OrderHistoryPage = () => {
  const sampleOrders = [
    {
      id: 1,
      movie: "Sample Movie 1",
      date: "2024-01-15",
      seats: "A1, A2",
      amount: "$25.00",
    },
    {
      id: 2,
      movie: "Sample Movie 2",
      date: "2024-01-10",
      seats: "B3, B4",
      amount: "$30.00",
    },
  ];

  return (
    <UserLayout>
      <div className="order-history-page">
        <h1>Order History</h1>
        <div className="orders-list">
          {sampleOrders.map((order) => (
            <div key={order.id} className="order-item">
              <h3>{order.movie}</h3>
              <p>Date: {order.date}</p>
              <p>Seats: {order.seats}</p>
              <p>Amount: {order.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default OrderHistoryPage;
