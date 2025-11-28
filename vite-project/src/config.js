// src/config.js

// URL de base de ton Status API PXP-102
// En dev: Docker ou node local sur http://localhost:4000
export const PXP102_STATUS_API_BASE_URL =
  import.meta.env.VITE_PXP102_STATUS_API_BASE_URL || "";

// Adresse du contrat IdentityPass PXP-102 sur mainnet
export const PXP102_IDENTITY_PASS_ADDRESS =
  "0x2b8899B3ACDe63Fd5ABefa0D75d5982622665498";

