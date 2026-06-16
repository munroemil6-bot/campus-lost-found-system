import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://campus-lost-found-backend-x9di.onrender.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Authentication
export async function registerUser(data) {
  const response = await api.post("/auth/register", data);
  return response.data;
}

export async function loginUser(data) {
  const response = await api.post("/auth/login", data);
  return response.data;
}

// Items
export async function fetchItems() {
  const response = await api.get("/items");
  return response.data;
}

export async function createItem(data) {
  const response = await api.post("/items", data);
  return response.data;
}

export async function deleteItem(itemId) {
  const response = await api.delete(`/items/${itemId}`);
  return response.data;
}

// Claims
export async function fetchClaims() {
  const response = await api.get("/claims");
  return response.data;
}

export async function createClaim(data) {
  const response = await api.post("/claims", data);
  return response.data;
}

export async function updateClaimStatus(claimId, status) {
  const response = await api.patch(`/claims/${claimId}`, {
    status,
  });
  return response.data;
}