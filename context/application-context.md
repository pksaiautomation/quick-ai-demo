# AnyCompany Order Portal - Business Context

Application: OrderHub
Business process: Order-to-Cash
Primary users: Customer support, order operations, finance operations
Key entities: Customer, Order, Product, Payment, Incident, Business Process

Relationships:
- Customer places Order
- Order contains Product
- Order requires Payment validation
- Incident impacts Application
- Application supports Order-to-Cash

Business rule:
If payment authorization status does not match the configured customer risk profile, the order is blocked until manual validation is completed.
