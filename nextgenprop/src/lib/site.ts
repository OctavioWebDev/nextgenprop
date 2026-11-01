// Per-site settings for the gallery and admin. The same files are shared by the
// Integrity, Next Generation and Dominguez sites; only this file differs.
export const site = {
  id: 'ngp', // folder inside the Blob store, so the three sites never mix photos
  name: 'Next Generation Properties',
  sessionCookie: 'ngp_admin',
};
