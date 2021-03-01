/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCustomers = /* GraphQL */ `
  mutation DeleteCustomers($id: Int!) {
    deleteCustomers(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const createCustomers = /* GraphQL */ `
  mutation CreateCustomers($createCustomersInput: CreateCustomersInput!) {
    createCustomers(createCustomersInput: $createCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const updateCustomers = /* GraphQL */ `
  mutation UpdateCustomers($updateCustomersInput: UpdateCustomersInput!) {
    updateCustomers(updateCustomersInput: $updateCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders($id: Int!) {
    deleteOrders(id: $id) {
      id
      customerId
      orderDate
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders($createOrdersInput: CreateOrdersInput!) {
    createOrders(createOrdersInput: $createOrdersInput) {
      id
      customerId
      orderDate
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders($updateOrdersInput: UpdateOrdersInput!) {
    updateOrders(updateOrdersInput: $updateOrdersInput) {
      id
      customerId
      orderDate
    }
  }
`;
