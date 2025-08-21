let sessions: { [key: string]: string } = {}; // In-memory session storage

export const createSession = (vendorId: string) => {
  const sessionId = Date.now().toString();
  sessions[sessionId] = vendorId;
  return sessionId;
};

export const getVendorIdFromSession = (sessionId: string) => {
  return sessions[sessionId];
};

export const destroySession = (sessionId: string) => {
  delete sessions[sessionId];
};
